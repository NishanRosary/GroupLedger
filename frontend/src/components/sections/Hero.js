import React, { useState, useEffect } from 'react';

const Hero = () => {
  // State for interactive fintech simulation mockup
  const [activeTab, setActiveTab] = useState('upload'); // 'upload', 'track', 'settle'
  
  // Tab 1: Upload state
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scannedData, setScannedData] = useState(null);

  // Tab 2: Track state (list of transactions)
  const [transactions, setTransactions] = useState([
    { id: 1, name: 'Team Dinner', paidBy: 'Alex', amount: 120.00, split: '4 ways', status: 'Reconciled' },
    { id: 2, name: 'Office Espresso', paidBy: 'Sarah', amount: 45.50, split: '2 ways', status: 'Reconciled' },
    { id: 3, name: 'Cloud Server', paidBy: 'Nishan', amount: 350.00, split: 'Equally', status: 'Pending' },
  ]);
  const [newTransactionName, setNewTransactionName] = useState('');
  const [newTransactionAmount, setNewTransactionAmount] = useState('');

  // Tab 3: Settle state
  const [settled, setSettled] = useState(false);
  const [settlementStep, setSettlementStep] = useState(0); // 0: Idle, 1: Calculating, 2: Settled

  // Scan simulation logic
  const handleSimulateScan = () => {
    setIsScanning(true);
    setScanProgress(0);
    setScannedData(null);
  };

  useEffect(() => {
    let interval;
    if (isScanning) {
      interval = setInterval(() => {
        setScanProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsScanning(false);
            setScannedData({
              merchant: 'CAFE SUPREME CO.',
              date: '2026-06-24',
              items: [
                { desc: 'Double Espresso', qty: 2, price: 9.00 },
                { desc: 'Avocado Toast', qty: 2, price: 24.00 },
                { desc: 'Tax & Service', qty: 1, price: 6.60 },
              ],
              total: 39.60,
              confidence: '99.8%',
            });
            return 100;
          }
          return prev + 10;
        });
      }, 150);
    }
    return () => clearInterval(interval);
  }, [isScanning]);

  // Settlement animation logic
  const handleSettle = () => {
    setSettlementStep(1);
    setTimeout(() => {
      setSettlementStep(2);
      setSettled(true);
    }, 1800);
  };

  const handleResetSettlement = () => {
    setSettlementStep(0);
    setSettled(false);
  };

  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (!newTransactionName || !newTransactionAmount) return;
    const newTx = {
      id: Date.now(),
      name: newTransactionName,
      paidBy: 'You',
      amount: parseFloat(newTransactionAmount),
      split: '4 ways',
      status: 'Pending',
    };
    setTransactions([newTx, ...transactions]);
    setNewTransactionName('');
    setNewTransactionAmount('');
  };

  return (
    <section className="relative w-full py-12 md:py-20 animate-fade-in-up">
      {/* ── Background decoration matching premium fintech appearance ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none opacity-[0.03] select-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] z-0" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-white opacity-[0.04] rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 text-center">
        {/* Modern Fintech Pill Badge */}
        <div className="inline-flex items-center space-x-2.5 bg-mono-dark border border-mono-border px-3.5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-mono-light mb-6 shadow-premium-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mono-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-mono-white"></span>
          </span>
          <span>SYSTEM UPDATE • V0.2.0 • AI OCR ENGINE</span>
        </div>

        {/* Crisp Bold Headline */}
        <h1 className="text-[38px] sm:text-headline md:text-display font-extrabold text-mono-white uppercase tracking-tight leading-[1.05] max-w-4xl mx-auto mb-6">
          Upload Bills.<br />
          Track Expenses.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-mono-white via-mono-white to-mono-muted">
            Settle Instantly.
          </span>
        </h1>

        {/* Premium Subheading */}
        <p className="text-body-lg md:text-title-md text-mono-muted max-w-2xl mx-auto font-light tracking-wide leading-relaxed mb-10 px-4">
          Automate group finances with intelligent AI receipt scanning, real-time ledger reconciliation, and instant settlement calculations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 px-4">
          <a
            href="#dashboard"
            onClick={() => setActiveTab('upload')}
            className="w-full sm:w-auto mono-btn-primary px-8 py-3.5 rounded text-xs font-extrabold tracking-widest uppercase flex items-center justify-center space-x-2 group cursor-pointer"
          >
            <span>Get Started</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 transform transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a
            href="#demo"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('interactive-demo');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto mono-btn-secondary px-8 py-3.5 rounded text-xs font-extrabold tracking-widest uppercase flex items-center justify-center space-x-2 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Watch Demo</span>
          </a>
        </div>

        {/* ── Interactive Fintech Mockup Dashboard ── */}
        <div id="interactive-demo" className="w-full max-w-4xl mx-auto px-4">
          <div className="mono-card border border-mono-border/80 overflow-hidden shadow-premium bg-mono-darkest/45 backdrop-blur-md">
            
            {/* Mockup Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-mono-border bg-mono-darkest/90">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-mono-border" />
                <span className="w-2.5 h-2.5 rounded-full bg-mono-border" />
                <span className="w-2.5 h-2.5 rounded-full bg-mono-border" />
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-mono-muted pl-4">
                  Ledger Terminal • Sandbox
                </span>
              </div>
              <div className="flex space-x-1">
                {['upload', 'track', 'settle'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 text-[9px] font-extrabold uppercase tracking-wider rounded transition-all duration-200 ${
                      activeTab === tab
                        ? 'bg-mono-white text-mono-black shadow-premium-sm'
                        : 'text-mono-muted hover:text-mono-white hover:bg-mono-dark'
                    }`}
                  >
                    {tab === 'upload' && '1. Upload'}
                    {tab === 'track' && '2. Track'}
                    {tab === 'settle' && '3. Settle'}
                  </button>
                ))}
              </div>
            </div>

            {/* Mockup Content Panel */}
            <div className="p-6 md:p-8 min-h-[340px] flex flex-col justify-between text-left">
              
              {/* Tab 1: AI Invoice Scanner */}
              {activeTab === 'upload' && (
                <div className="animate-fade-in space-y-6">
                  <div>
                    <h3 className="text-body-lg font-bold uppercase tracking-wider text-mono-white mb-1">
                      Upload Bill
                    </h3>
                    <p className="text-xs text-mono-muted">
                      Upload digital receipts or images. Our custom layout extractor categorizes line-items in real-time.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    {/* Simulated Dropzone */}
                    <div className="md:col-span-7 border border-dashed border-mono-border rounded-lg p-6 bg-mono-black flex flex-col items-center justify-center text-center group transition-colors duration-300 hover:border-mono-muted">
                      {isScanning ? (
                        <div className="w-full space-y-4 py-3">
                          <div className="flex justify-between text-[10px] font-extrabold uppercase tracking-widest text-mono-light">
                            <span>Scanning invoice layout...</span>
                            <span>{scanProgress}%</span>
                          </div>
                          <div className="w-full bg-mono-border h-1.5 rounded-full overflow-hidden relative">
                            <div 
                              className="bg-mono-white h-full transition-all duration-150 ease-out"
                              style={{ width: `${scanProgress}%` }}
                            />
                            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-mono-white to-transparent opacity-30 animate-pulse" />
                          </div>
                          <p className="text-[10px] text-mono-muted font-mono">
                            Running OCR parser & segmenting tax logs...
                          </p>
                        </div>
                      ) : scannedData ? (
                        <div className="w-full space-y-4 py-1 text-left">
                          <div className="flex justify-between items-center pb-2 border-b border-mono-border">
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-mono-muted">SUCCESSFULLY EXTRACTED</span>
                            <span className="text-[9px] font-bold bg-mono-white text-mono-black px-1.5 py-0.5 rounded uppercase">{scannedData.confidence} Confidence</span>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-mono-white uppercase">{scannedData.merchant}</p>
                            <p className="text-[10px] text-mono-muted">Date detected: {scannedData.date}</p>
                          </div>
                          <div className="space-y-1.5">
                            {scannedData.items.map((item, idx) => (
                              <div key={idx} className="flex justify-between text-[11px] font-mono text-mono-light">
                                <span>{item.qty}x {item.desc}</span>
                                <span>${item.price.toFixed(2)}</span>
                              </div>
                            ))}
                          </div>
                          <div className="pt-2 border-t border-mono-border flex justify-between text-xs font-extrabold uppercase text-mono-white">
                            <span>Total Balance</span>
                            <span>${scannedData.total.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-end space-x-2 pt-2">
                            <button 
                              onClick={() => {
                                // Add to transaction list
                                setTransactions([
                                  {
                                    id: Date.now(),
                                    name: 'Cafe Supreme Co.',
                                    paidBy: 'You',
                                    amount: scannedData.total,
                                    split: '4 ways',
                                    status: 'Reconciled'
                                  },
                                  ...transactions
                                ]);
                                setActiveTab('track');
                              }}
                              className="px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider bg-mono-white text-mono-black rounded hover:bg-mono-light transition-colors"
                            >
                              Add to Ledger
                            </button>
                            <button 
                              onClick={handleSimulateScan}
                              className="px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider border border-mono-border text-mono-white rounded hover:bg-mono-dark transition-colors"
                            >
                              Scan Another
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-mono-muted mb-3 group-hover:text-mono-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-mono-white mb-1">
                            Simulate Bill Ingestion
                          </span>
                          <span className="text-[10px] text-mono-muted mb-4">
                            PDF, PNG, or HEIC up to 10MB
                          </span>
                          <button
                            onClick={handleSimulateScan}
                            className="px-4 py-2 bg-mono-dark hover:bg-mono-white border border-mono-border hover:text-mono-black text-[10px] font-extrabold uppercase tracking-wider rounded text-mono-white transition-all duration-300"
                          >
                            Simulate Upload
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Metadata Visualizer */}
                    <div className="md:col-span-5 bg-mono-dark p-5 rounded-lg border border-mono-border text-[11px] space-y-4">
                      <span className="text-[9px] font-extrabold uppercase tracking-widest text-mono-muted block">
                        Extraction Logs
                      </span>
                      <div className="font-mono space-y-2 text-mono-light leading-relaxed">
                        <p className="text-mono-muted"># Initialize OCR Parser...</p>
                        <p># Model: GroupLedger-V2-Vision</p>
                        <p># Latency: <span className="text-mono-white font-bold">120ms</span></p>
                        <p># Auto-categorize: <span className="text-mono-white">Food & Drinks</span></p>
                        <p className="text-mono-muted"># Awaiting receipt upload stream...</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Track Expenses */}
              {activeTab === 'track' && (
                <div className="animate-fade-in space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-body-lg font-bold uppercase tracking-wider text-mono-white mb-1">
                        Track Expenses
                      </h3>
                      <p className="text-xs text-mono-muted">
                        Live reconciliation ledger. Post bills, view automated balance breakdowns.
                      </p>
                    </div>
                    {/* Fast add action */}
                    <form onSubmit={handleAddTransaction} className="flex items-center gap-2">
                      <input 
                        type="text" 
                        placeholder="Description" 
                        value={newTransactionName}
                        onChange={(e) => setNewTransactionName(e.target.value)}
                        className="bg-mono-black border border-mono-border rounded px-2.5 py-1 text-xs text-mono-white focus:outline-none focus:border-mono-muted w-24 sm:w-28"
                      />
                      <input 
                        type="number" 
                        placeholder="Amount" 
                        value={newTransactionAmount}
                        onChange={(e) => setNewTransactionAmount(e.target.value)}
                        className="bg-mono-black border border-mono-border rounded px-2.5 py-1 text-xs text-mono-white focus:outline-none focus:border-mono-muted w-16 sm:w-20"
                      />
                      <button 
                        type="submit"
                        className="bg-mono-white text-mono-black border border-mono-white hover:bg-mono-black hover:text-mono-white px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded transition-colors"
                      >
                        Add
                      </button>
                    </form>
                  </div>

                  {/* Transaction Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-mono-border text-[9px] font-extrabold uppercase tracking-widest text-mono-muted text-left">
                          <th className="py-2.5">Expense</th>
                          <th className="py-2.5">Paid By</th>
                          <th className="py-2.5 text-right">Amount</th>
                          <th className="py-2.5 text-center">Split</th>
                          <th className="py-2.5 text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-mono-border/40">
                        {transactions.map((tx) => (
                          <tr key={tx.id} className="text-xs hover:bg-mono-dark/40 transition-colors">
                            <td className="py-3 font-semibold text-mono-white">{tx.name}</td>
                            <td className="py-3 text-mono-light">{tx.paidBy}</td>
                            <td className="py-3 text-right font-mono text-mono-white">${tx.amount.toFixed(2)}</td>
                            <td className="py-3 text-center text-mono-muted text-[10px] uppercase font-bold">{tx.split}</td>
                            <td className="py-3 text-right">
                              <span className={`inline-block px-1.5 py-0.5 rounded-[3px] text-[9px] font-extrabold uppercase tracking-wider ${
                                tx.status === 'Reconciled' 
                                  ? 'bg-mono-white/10 text-mono-white border border-mono-white/20' 
                                  : 'bg-mono-dark text-mono-muted border border-mono-border'
                              }`}>
                                {tx.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Tab 3: Settle Instantly */}
              {activeTab === 'settle' && (
                <div className="animate-fade-in space-y-6">
                  <div>
                    <h3 className="text-body-lg font-bold uppercase tracking-wider text-mono-white mb-1">
                      Settle Instantly
                    </h3>
                    <p className="text-xs text-mono-muted">
                      Optimized settlement logic. Computes the minimum number of transactions needed to square the books.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                    
                    {/* Calculated Balances Summary */}
                    <div className="md:col-span-7 bg-mono-black border border-mono-border p-5 rounded-lg flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex justify-between items-center pb-2.5 border-b border-mono-border mb-3">
                          <span className="text-[10px] font-extrabold uppercase tracking-widest text-mono-light">Computed Debts</span>
                          <span className="text-[9px] font-bold text-mono-muted uppercase">3 Accounts Active</span>
                        </div>
                        
                        {settlementStep === 2 ? (
                          <div className="space-y-3 py-2 text-center">
                            <div className="w-10 h-10 bg-mono-white text-mono-black rounded-full flex items-center justify-center mx-auto mb-2 animate-bounce">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="text-xs font-bold text-mono-white uppercase tracking-wider">ALL GROUP DEBTS SETTLED</p>
                            <p className="text-[10px] text-mono-muted font-mono">Net outstanding balances have been reset to zero.</p>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-mono-light font-medium">Alex owes <strong className="text-mono-white font-semibold">Nishan</strong></span>
                              <span className="font-mono text-mono-white font-bold">$105.00</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-mono-light font-medium">Sarah owes <strong className="text-mono-white font-semibold">Nishan</strong></span>
                              <span className="font-mono text-mono-white font-bold">$62.50</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-mono-light font-medium">You owe <strong className="text-mono-white font-semibold">Nishan</strong></span>
                              <span className="font-mono text-mono-white font-bold">$12.50</span>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="pt-2">
                        {settlementStep === 0 && (
                          <button
                            onClick={handleSettle}
                            className="w-full py-2.5 bg-mono-white text-mono-black hover:bg-mono-light text-xs font-extrabold uppercase tracking-widest rounded transition-all duration-300"
                          >
                            Calculate & Settle Group
                          </button>
                        )}
                        {settlementStep === 1 && (
                          <button
                            disabled
                            className="w-full py-2.5 bg-mono-dark border border-mono-border text-mono-muted text-xs font-extrabold uppercase tracking-widest rounded flex items-center justify-center space-x-2"
                          >
                            <span className="w-3.5 h-3.5 border-2 border-t-transparent border-mono-muted rounded-full animate-spin" />
                            <span>Processing Settlements...</span>
                          </button>
                        )}
                        {settlementStep === 2 && (
                          <button
                            onClick={handleResetSettlement}
                            className="w-full py-2.5 border border-mono-border text-mono-white hover:bg-mono-dark text-xs font-extrabold uppercase tracking-widest rounded transition-all duration-300"
                          >
                            Reset Settlement Demo
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Net positions card */}
                    <div className="md:col-span-5 bg-mono-dark border border-mono-border p-5 rounded-lg flex flex-col justify-between space-y-4">
                      <div>
                        <span className="text-[9px] font-extrabold uppercase tracking-widest text-mono-muted block mb-3">
                          Total Net Positions
                        </span>
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-mono-light font-semibold">Nishan</span>
                            <span className={`text-xs font-mono font-bold ${settled ? 'text-mono-white' : 'text-mono-white'}`}>
                              {settled ? '$0.00' : '+$180.00'}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-mono-light">Alex</span>
                            <span className={`text-xs font-mono font-semibold ${settled ? 'text-mono-muted' : 'text-mono-muted'}`}>
                              {settled ? '$0.00' : '-$105.00'}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-mono-light">Sarah</span>
                            <span className={`text-xs font-mono font-semibold ${settled ? 'text-mono-muted' : 'text-mono-muted'}`}>
                              {settled ? '$0.00' : '-$62.50'}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-mono-light">You</span>
                            <span className={`text-xs font-mono font-semibold ${settled ? 'text-mono-muted' : 'text-mono-muted'}`}>
                              {settled ? '$0.00' : '-$12.50'}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-2 border-t border-mono-border/50 text-[10px] text-mono-muted font-mono leading-relaxed">
                        No transactions pending.
                      </div>
                    </div>

                  </div>
                </div>
              )}

            </div>

            {/* Mockup Footer */}
            <div className="px-6 py-3 bg-mono-dark border-t border-mono-border flex items-center justify-between text-[9px] font-bold text-mono-muted uppercase tracking-wider">
              <div className="flex items-center space-x-1.5">
                <span className="w-1 h-1 rounded-full bg-mono-white animate-pulse" />
                <span>SSL Encrypted</span>
              </div>
              <span>Split precision (6 decimal places)</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
