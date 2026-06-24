import React, { useState } from 'react';

export default function SimpleInterestCalculator() {
  // 1. Setup state hooks for inputs
  const [principal, setPrincipal] = useState(1000);
  const [rate, setRate] = useState(5);
  const [time, setTime] = useState(3);

  // 2. Inline dynamic calculations executed on every render state change
  const interest = (Number(principal) * Number(rate) * Number(time)) / 100;
  const totalAmount = Number(principal) + interest;

  // 3. Centralized Inline CSS Styles Object
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f4f6f8',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '20px',
    },
    card: {
      backgroundColor: '#ffffff',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      width: '100%',
      maxWidth: '400px',
    },
    heading: {
      margin: '0 0 24px 0',
      fontSize: '22px',
      fontWeight: '700',
      color: '#1a202c',
      textAlign: 'center',
    },
    inputGroup: {
      marginBottom: '18px',
    },
    label: {
      display: 'block',
      marginBottom: '6px',
      fontSize: '14px',
      fontWeight: '600',
      color: '#4a5568',
    },
    inputField: {
      width: '100%',
      padding: '12px',
      fontSize: '16px',
      borderRadius: '8px',
      border: '2px solid #e2e8f0',
      outline: 'none',
      boxSizing: 'border-box',
    },
    resultsBox: {
      marginTop: '24px',
      padding: '16px',
      backgroundColor: '#f7fafc',
      borderRadius: '8px',
      border: '1px solid #edf2f7',
    },
    resultRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
    },
    resultLabel: {
      color: '#718096',
      fontSize: '15px',
    },
    resultValue: {
      color: '#2d3748',
      fontWeight: '600',
      fontSize: '16px',
    },
    totalRow: {
      marginTop: '12px',
      paddingTop: '12px',
      borderTop: '2px dashed #e2e8f0',
      marginBottom: 0,
    },
    totalLabel: {
      color: '#2b6cb0',
      fontWeight: '700',
      fontSize: '16px',
    },
    totalValue: {
      color: '#2b6cb0',
      fontWeight: '700',
      fontSize: '20px',
    },
  };

  // Helper function to format numbers neatly into currency text
  const formatCurrency = (val) => {
    return isNaN(val) ? '$0.00' : '$' + val.toLocaleString('en-US', { 
      minimumFractionDigits: 2,
      maximumFractionDigits: 2 
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Simple Interest Calculator</h2>
        
        {/* Principal Input Block */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Principal Amount ($)</label>
          <input 
            type="number" 
            value={principal} 
            onChange={(e) => setPrincipal(e.target.value)} 
            style={styles.inputField}
            placeholder="0.00"
          />
        </div>

        {/* Rate Input Block */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Rate of Interest (% per year)</label>
          <input 
            type="number" 
            value={rate} 
            onChange={(e) => setRate(e.target.value)} 
            style={styles.inputField}
            placeholder="e.g. 5"
          />
        </div>

        {/* Time Input Block */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Time Horizon (Years)</label>
          <input 
            type="number" 
            value={time} 
            onChange={(e) => setTime(e.target.value)} 
            style={styles.inputField}
            placeholder="e.g. 3"
          />
        </div>

        {/* Dynamic Display Panel */}
        <div style={styles.resultsBox}>
          <div style={styles.resultRow}>
            <span style={styles.resultLabel}>Interest Earned:</span>
            <span style={styles.resultValue}>{formatCurrency(interest)}</span>
          </div>
          
          {/* Spreading normal row styles and overlaying total row highlight overrides */}
          <div style={{ ...styles.resultRow, ...styles.totalRow }}>
            <span style={styles.totalLabel}>Total Value:</span>
            <span style={styles.totalValue}>{formatCurrency(totalAmount)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}