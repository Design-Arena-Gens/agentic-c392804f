'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(1000);
  const [annualReturn, setAnnualReturn] = useState(10);
  const [currentSavings, setCurrentSavings] = useState(0);
  const [years, setYears] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);

  useEffect(() => {
    calculateWealth();
  }, [monthlyInvestment, annualReturn, currentSavings]);

  const calculateWealth = () => {
    const monthlyRate = annualReturn / 100 / 12;
    let total = currentSavings;
    let months = 0;

    while (total < 1000000 && months < 600) {
      total = total * (1 + monthlyRate) + monthlyInvestment;
      months++;
    }

    setYears(Math.ceil(months / 12));
    setFinalAmount(total);
  };

  return (
    <div className="container">
      <div className="hero">
        <h1>💰 Path to $1,000,000</h1>
        <p>Your comprehensive guide to building serious wealth through proven strategies</p>
      </div>

      <div className="calculator">
        <h2>Wealth Timeline Calculator</h2>

        <div className="form-group">
          <label>Current Savings: ${currentSavings.toLocaleString()}</label>
          <input
            type="range"
            min="0"
            max="100000"
            step="1000"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(Number(e.target.value))}
          />
        </div>

        <div className="form-group">
          <label>Monthly Investment: ${monthlyInvestment.toLocaleString()}</label>
          <input
            type="range"
            min="100"
            max="10000"
            step="100"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
          />
        </div>

        <div className="form-group">
          <label>Expected Annual Return: {annualReturn}%</label>
          <input
            type="range"
            min="5"
            max="20"
            step="0.5"
            value={annualReturn}
            onChange={(e) => setAnnualReturn(Number(e.target.value))}
          />
        </div>

        {finalAmount >= 1000000 && (
          <div className="result">
            <h3>🎯 You'll reach your goal!</h3>
            <div className="amount">${finalAmount.toLocaleString(undefined, {maximumFractionDigits: 0})}</div>
            <div className="timeline">in approximately {years} years</div>
          </div>
        )}
      </div>

      <div className="strategies">
        <div className="strategy-card">
          <div className="icon">🚀</div>
          <h3>Start a Business</h3>
          <p>Entrepreneurship offers unlimited earning potential and the fastest path to significant wealth.</p>
          <ul>
            <li>SaaS products (recurring revenue)</li>
            <li>E-commerce (dropshipping/retail)</li>
            <li>Consulting/Agency services</li>
            <li>Digital products/courses</li>
            <li>Mobile apps/software</li>
          </ul>
        </div>

        <div className="strategy-card">
          <div className="icon">📈</div>
          <h3>Strategic Investing</h3>
          <p>Build wealth through compound returns and diversified portfolio strategies.</p>
          <ul>
            <li>Index funds (S&P 500)</li>
            <li>Real estate investment trusts</li>
            <li>Growth stocks</li>
            <li>Dividend aristocrats</li>
            <li>Alternative investments</li>
          </ul>
        </div>

        <div className="strategy-card">
          <div className="icon">🏠</div>
          <h3>Real Estate</h3>
          <p>Leverage property investments for passive income and long-term appreciation.</p>
          <ul>
            <li>Rental properties</li>
            <li>House flipping</li>
            <li>Commercial real estate</li>
            <li>REITs for passive investing</li>
            <li>Airbnb/short-term rentals</li>
          </ul>
        </div>

        <div className="strategy-card">
          <div className="icon">💼</div>
          <h3>Career Growth</h3>
          <p>Maximize your earning potential through strategic career development.</p>
          <ul>
            <li>High-demand tech skills</li>
            <li>Executive positions</li>
            <li>Sales/commission roles</li>
            <li>Specialized expertise</li>
            <li>Multiple income streams</li>
          </ul>
        </div>

        <div className="strategy-card">
          <div className="icon">🎓</div>
          <h3>Knowledge Business</h3>
          <p>Monetize your expertise through digital products and online platforms.</p>
          <ul>
            <li>Online courses</li>
            <li>YouTube channel</li>
            <li>Coaching/mentorship</li>
            <li>Books and ebooks</li>
            <li>Membership sites</li>
          </ul>
        </div>

        <div className="strategy-card">
          <div className="icon">⚡</div>
          <h3>Side Hustles</h3>
          <p>Generate additional income streams while building your primary wealth strategy.</p>
          <ul>
            <li>Freelancing (writing, design)</li>
            <li>Affiliate marketing</li>
            <li>Stock photography/video</li>
            <li>App/web development</li>
            <li>E-commerce stores</li>
          </ul>
        </div>
      </div>

      <div className="cta">
        <h2>The Reality Check</h2>
        <p>Building $1 million requires dedication, strategic planning, and consistent action. Here's what successful wealth builders do:</p>
        <ul style={{textAlign: 'left', maxWidth: '600px', margin: '30px auto', listStyle: 'none'}}>
          <li style={{padding: '10px 0', paddingLeft: '30px', position: 'relative'}}>
            <span style={{position: 'absolute', left: 0, color: '#667eea', fontWeight: 'bold'}}>1.</span>
            <strong>Live below their means</strong> - Save 20-50% of income
          </li>
          <li style={{padding: '10px 0', paddingLeft: '30px', position: 'relative'}}>
            <span style={{position: 'absolute', left: 0, color: '#667eea', fontWeight: 'bold'}}>2.</span>
            <strong>Invest consistently</strong> - Time in market beats timing the market
          </li>
          <li style={{padding: '10px 0', paddingLeft: '30px', position: 'relative'}}>
            <span style={{position: 'absolute', left: 0, color: '#667eea', fontWeight: 'bold'}}>3.</span>
            <strong>Build multiple income streams</strong> - Don't rely on one source
          </li>
          <li style={{padding: '10px 0', paddingLeft: '30px', position: 'relative'}}>
            <span style={{position: 'absolute', left: 0, color: '#667eea', fontWeight: 'bold'}}>4.</span>
            <strong>Continuously learn</strong> - Education pays the best returns
          </li>
          <li style={{padding: '10px 0', paddingLeft: '30px', position: 'relative'}}>
            <span style={{position: 'absolute', left: 0, color: '#667eea', fontWeight: 'bold'}}>5.</span>
            <strong>Take calculated risks</strong> - Opportunity favors the bold
          </li>
        </ul>
        <button className="btn" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          Start Planning Your Journey
        </button>
      </div>

      <div style={{textAlign: 'center', padding: '40px 20px', color: 'white'}}>
        <p style={{fontSize: '0.9rem', opacity: 0.8}}>
          Disclaimer: This tool provides educational estimates only. Actual investment returns vary.
          Past performance does not guarantee future results. Consult a financial advisor for personalized advice.
        </p>
      </div>
    </div>
  );
}
