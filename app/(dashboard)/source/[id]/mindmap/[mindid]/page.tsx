"use client";

import axios from "axios";
import { network } from "../../../../../../network";
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, Node, Edge, Handle, Position } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useState, useCallback, useEffect } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import dagre from "dagre";
import MindmapLoading from "./loading";

const nodeWidth = 220;
const nodeHeight = 80;

interface MindmapNode {
  id: string;
  positionX: string;
  positionY: string;
  label: string;
  definition: string;
  isHighlyImportant: boolean;
}

interface MindmapEdge {
  id: string;
  source: string;
  target: string;
}

function getLayoutedElements(nodes: Node[], edges: Edge[], direction: "TB" | "LR" = "TB") {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  return {
    nodes: nodes.map((node) => {
      const { x, y } = dagreGraph.node(node.id);
      return {
        ...node,
        position: { x: x - nodeWidth / 2, y: y - nodeHeight / 2 },
      };
    }),
    edges,
  };
}


interface NodeData {
  label: string;
  definition?: string;
  isHighlyImportant: boolean;
}

// Custom node component for collapsible mindmap
const MindmapNode = ({ data }: { data: NodeData; id: string }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
        // You can add logic here to show/hide connected edges
    };

    const isMainCategory = data.isHighlyImportant;
    const nodeStyle = {
        background: isMainCategory ? '#f3f4f6' : '#e5f3f0',
        color: '#1f2937',
        border: '1px solid #d1d5db',
        borderRadius: '8px',
        padding: '12px 16px',
        minWidth: '200px',
        maxWidth: '300px',
        fontSize: '14px',
        fontWeight: isMainCategory ? '600' : '400',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        boxShadow: isHovered ? '0 4px 12px rgba(0,0,0,0.15)' : '0 2px 8px rgba(0,0,0,0.1)',
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
    };

    return (
        <div
            style={nodeStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={toggleExpanded}
        >
            <Handle type="target" position={Position.Left} style={{ background: '#6b7280' }} />
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                        {data.label}
                    </div>
                    {isExpanded && data.definition && (
                        <div style={{ 
                            fontSize: '12px', 
                            opacity: 0.7, 
                            lineHeight: '1.4',
                            marginTop: '8px'
                        }}>
                            {data.definition}
                        </div>
                    )}
                </div>
                <div style={{ 
                    marginLeft: '8px', 
                    fontSize: '16px', 
                    opacity: 0.7,
                    transition: 'transform 0.2s ease'
                }}>
                    {isExpanded ? '‹' : '›'}
                </div>
            </div>
            
            <Handle type="source" position={Position.Right} style={{ background: '#6b7280' }} />
        </div>
    );
};

const nodeTypes = {
    mindmap: MindmapNode,
};

export default function MindmapPage({ params }: { params: Promise<{ mindid: string, id: string }> }) {
    const resolvedParams = React.use(params);
    console.log({resolvedParams});
    const [nodes, setNodes] = useState<Node[]>([]);
    const [edges, setEdges] = useState<Edge[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const onNodesChange = useCallback(
        (changes: Parameters<typeof applyNodeChanges>[0]) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
        []
    );
    const onEdgesChange = useCallback(
        (changes: Parameters<typeof applyEdgeChanges>[0]) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
        []
    );
    const onConnect = useCallback(
        (params: Parameters<typeof addEdge>[0]) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
        []
    );

    useEffect(() => {
        console.log({resolvedParams});
        const fetchMindmap = async () => {

            try {
                const response = await axios.get(`${network}/mindmap/getmindmap/${resolvedParams.mindid}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "api-key": "e4f47f73-b838-4944-82a7-93a5f9077aa2",
                    },
                });

                // Transform nodes to ReactFlow format with custom type
                const transformedNodes = response.data.nodes.map((node: MindmapNode) => ({
                    id: node.id,
                    position: { 
                        x: parseInt(node.positionX), 
                        y: parseInt(node.positionY) 
                    },
                    data: { 
                        label: node.label,
                        definition: node.definition,
                        isHighlyImportant: node.isHighlyImportant
                    },
                    type: 'mindmap' // Use our custom node type
                }));

                // Transform edges to ReactFlow format
                const transformedEdges = response.data.edges.map((edge: MindmapEdge) => ({
                    id: edge.id,
                    source: edge.source,
                    target: edge.target,
                    type: 'default',
                    style: { stroke: '#6b7280', strokeWidth: 2 }
                }));

                const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(transformedNodes, transformedEdges, "LR"); // "TB" for top-down

                setNodes(layoutedNodes);
                setEdges(layoutedEdges);

                console.log({ response, transformedNodes, transformedEdges });
            } catch (error) {
                console.error("Failed to fetch mindmap:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMindmap();
    }, [resolvedParams.mindid, resolvedParams]);

    if (loading) {
        return (
            <>
            <div className="flex justify-center items-center min-h-screen min-w-screen pl-64 bg-gray-50">
                <MindmapLoading />
            </div>
            </>
        );
    }

    return (
        <div className="h-screen w-full bg-gray-50 flex "> 
            
          
            
            {/* Right side - mindmap */}
            <div className="pl-64" style={{ width: '100vw', height: "100vh" }}>
                <div className=" flex justify-between items-center p-4 w-fit">
                    <button 
                        className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium transition-colors duration-200 border border-gray-300 hover:border-gray-400" 
                        onClick={() => router.push(`/source/${resolvedParams.id}`)}
                    >
                        ← Back
                    </button>
                </div>
                <ReactFlow
                    className="h-full w-full"
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    nodeTypes={nodeTypes}
                    onConnect={onConnect}
                    fitView
                    fitViewOptions={{ padding: 0.2 }}
                    style={{ background: '#ffffff' }}
                />
            </div>
        </div>
    );
}
