import React from "react";
import Layout from "@theme/Layout";
import ReactFlow, { Background, Controls } from "react-flow-renderer";
import "../css/flow.css"; // Import custom CSS


const commonNodeStyle = { color: 'white', padding: '10px' };

const nodes = [
    { id: '1', type: 'input', data: { label: <a href="/docs/customer-order" target="_blank" rel="noopener noreferrer" style={commonNodeStyle}>Customer Order (Zoho, Email)</a> }, position: { x: 100, y: 50 }, style: { backgroundColor: '#333' } },
    { id: '2', data: { label: <a href="/docs/requirement-form" target="_blank" rel="noopener noreferrer" style={commonNodeStyle}>Requirement Form</a> }, position: { x: 100, y: 200 }, style: { backgroundColor: '#333' } },
    { id: '3', data: { label: <a href="/docs/risk-assessment" target="_blank" rel="noopener noreferrer" style={commonNodeStyle}>Risk Assessment</a> }, position: { x: 400, y: 200 }, style: { backgroundColor: '#333' } },
    { id: '4', data: { label: <a href="/docs/approved" target="_blank" rel="noopener noreferrer" style={commonNodeStyle}>Approved</a> }, position: { x: 800, y: 100 }, style: { backgroundColor: 'green' } },
    { id: '5', data: { label: <a href="/docs/management-assessment" target="_blank" rel="noopener noreferrer" style={commonNodeStyle}>Management Assessment</a> }, position: { x: 800, y: 300 }, style: { backgroundColor: '#333' } },
    { id: '6', data: { label: <a href="/docs/rejected" target="_blank" rel="noopener noreferrer" style={commonNodeStyle}>Rejected</a> }, position: { x: 1100, y: 250 }, style: { backgroundColor: 'red' } },
    { id: '7', data: { label: <a href="/docs/send-contract" target="_blank" rel="noopener noreferrer" style={commonNodeStyle}>Send Contract to Client</a> }, position: { x: 1100, y: 100 }, style: { backgroundColor: '#333' } },
    { id: '8', data: { label: <a href="/docs/client-signs" target="_blank" rel="noopener noreferrer" style={commonNodeStyle}>Client Signs Online</a> }, position: { x: 1400, y: 100 }, style: { backgroundColor: '#333' } },
    { id: '9', data: { label: <a href="/docs/technical-advice" target="_blank" rel="noopener noreferrer" style={commonNodeStyle}>Technical Advice Form</a> }, position: { x: 1100, y: 450 }, style: { backgroundColor: '#333' } },
    { id: '10', data: { label: <a href="/docs/expense-request" target="_blank" rel="noopener noreferrer" style={commonNodeStyle}>Expense Request</a> }, position: { x: 1400, y: 450 }, style: { backgroundColor: '#333' } },
    { id: '11', data: { label: <a href="/docs/declined" target="_blank" rel="noopener noreferrer" style={commonNodeStyle}>Declined</a> }, position: { x: 1700, y: 400 }, style: { backgroundColor: 'red' } },
    { id: '12', data: { label: <a href="/docs/approve-expense" target="_blank" rel="noopener noreferrer" style={commonNodeStyle}>Approve Expense</a> }, position: { x: 1700, y: 500 }, style: { backgroundColor: 'green' } },
    { id: '13', data: { label: <a href="/docs/tracker/tutorial-basics/create-a-task" target="_blank" rel="noopener noreferrer" style={commonNodeStyle}>Does the Job</a> }, position: { x: 2000, y: 500 }, style: { backgroundColor: '#333' } },
    { id: '14', data: { label: <a href="/docs/tracker/tutorial-extras/Executing-a-task" target="_blank" rel="noopener noreferrer" style={commonNodeStyle}>Job Execution and Report (Tracker App)</a> }, position: { x: 2300, y: 500 }, style: { backgroundColor: '#333' } },
    { id: '15', data: { label: <a href="/docs/e-pms/pms-modules/company-list" target="_blank" rel="noopener noreferrer" style={commonNodeStyle}>Register Company and Vessel (E-PMS)</a> }, position: { x: 400, y: 300 }, style: { backgroundColor: '#333' } },
    { id: '16', data: { label: <a href="/docs/category/inventory-management" target="_blank" rel="noopener noreferrer" style={commonNodeStyle}>Create Subscription on Inventory</a> }, position: { x: 2600, y: 500 }, style: { backgroundColor: '#333' } },
  ];
  
  const edges = [
    { id: 'e1', source: '1', target: '2', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 3 } },
    { id: 'e2', source: '2', target: '3', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 3 } },
    { id: 'e3', source: '3', target: '4', label: 'Low Risk', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 3 } },
    { id: 'e4', source: '3', target: '5', label: 'High Risk', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 3 } },
    { id: 'e5', source: '5', target: '6', label: 'Risk Too High', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 3 } },
    { id: 'e6', source: '5', target: '4', label: 'Acceptable Risk', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 3 } },
    { id: 'e7', source: '4', target: '7', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 3 } },
    { id: 'e8', source: '7', target: '8', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 3 } },
    { id: 'e9', source: '4', target: '9', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 3 } },
    { id: 'e10', source: '9', target: '10', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 3 } },
    { id: 'e11', source: '10', target: '11', label: 'Decline', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 3 } },
    { id: 'e12', source: '10', target: '12', label: 'Approve', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 3 } },
    { id: 'e13', source: '12', target: '13', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 3 } },
    { id: 'e14', source: '13', target: '14', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 3 } },
    { id: 'e2', source: '2', target: '15', label: 'Maritime?', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 3 } },
    { id: 'e14', source: '14', target: '16', markerEnd: { type: 'arrowclosed' }, style: { strokeWidth: 3 } },
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

