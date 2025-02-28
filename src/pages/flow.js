import React from "react";
import Layout from "@theme/Layout";
import ReactFlow, { Background, Controls } from "react-flow-renderer";
import "../css/flow.css"; // Import custom CSS


const nodes = [
  { id: '1', type: 'input', data: { label: 'Customer Order (Zoho, Email)' }, position: { x: 100, y: 50 } },
  { id: '2', data: { label: 'Requirement Form' }, position: { x: 100, y: 150 } },
  { id: '3', data: { label: 'Risk Assessment' }, position: { x: 300, y: 150 } },
  { id: '4', data: { label: 'Approved' }, position: { x: 500, y: 100 }, style: { backgroundColor: 'green', color: 'white' } },
  { id: '5', data: { label: 'Management Assessment' }, position: { x: 500, y: 200 } },
  { id: '6', data: { label: 'Rejected' }, position: { x: 700, y: 150 }, style: { backgroundColor: 'red', color: 'white' } },
  { id: '7', data: { label: 'Send Contract to Client' }, position: { x: 700, y: 50 } },
  { id: '8', data: { label: 'Client Signs Online' }, position: { x: 900, y: 50 } },
  { id: '9', data: { label: 'Technical Advice Form' }, position: { x: 700, y: 300 } },
  { id: '10', data: { label: 'Expense Request' }, position: { x: 900, y: 300 } },
  { id: '11', data: { label: 'Declined' }, position: { x: 1100, y: 250 }, style: { backgroundColor: 'red', color: 'white' } },
  { id: '12', data: { label: 'Approve Expense' }, position: { x: 1100, y: 350 }, style: { backgroundColor: 'green', color: 'white' } },
  { id: '13', data: { label: 'Does the Job' }, position: { x: 1300, y: 350 } },
  { id: '14', data: { label: 'Job Report (EPMS App)' }, position: { x: 1500, y: 350 } },
];

const edges = [
  { id: 'e1', source: '1', target: '2' },
  { id: 'e2', source: '2', target: '3' },
  { id: 'e3', source: '3', target: '4', label: 'Low Risk' },
  { id: 'e4', source: '3', target: '5', label: 'High Risk' },
  { id: 'e5', source: '5', target: '6', label: 'Risk Too High' },
  { id: 'e6', source: '5', target: '4', label: 'Acceptable Risk' },
  { id: 'e7', source: '4', target: '7' },
  { id: 'e8', source: '7', target: '8' },
  { id: 'e9', source: '4', target: '9' },
  { id: 'e10', source: '9', target: '10' },
  { id: 'e11', source: '10', target: '11', label: 'Decline' },
  { id: 'e12', source: '10', target: '12', label: 'Approve' },
  { id: 'e13', source: '12', target: '13' },
  { id: 'e14', source: '13', target: '14' },
];



export default function FlowPage() {
  return (
    <Layout title="Flow Diagram">
      <div className="flow-container">
        <ReactFlow nodes={nodes} edges={edges}>
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </Layout>
  );
}
