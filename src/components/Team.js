import React, { useState, useEffect } from 'react';
import bannerBg from '../assets/images/banner-bg.png';

function Team() {
  const [page, setPage] = useState(0);
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to handle copying text to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    }).catch(() => {
      alert('Failed to copy!');
    });
  };

  // Function to fetch team data
  const fetchTeamData = () => {
    setLoading(true);
    // Dummy fetch simulation
    setTimeout(() => {
      setTeamData((prevData) => [
        ...prevData,
        { mobile: '9876543210', referrer: 'John Doe', max: '1000' },
        { mobile: '9876543211', referrer: 'Jane Doe', max: '1200' }
      ]);
      setLoading(false);
    }, 1000);
  };

  // useEffect to load more data when 'page' changes
  useEffect(() => {
    fetchTeamData();
  }, [page]);

  return (
    <div className="team-main">
      <div className="team-box">
        <img src={bannerBg} alt="Banner" />
        <div className="team-box-main">
          <div className="team-box-list">
            <div className="team-box-item">
              <h3>₹ 0</h3>
              <p>Total Income</p>
            </div>
            <div className="team-box-item">
              <h3>0</h3>
              <p>Total Valid</p>
            </div>
            <div className="team-box-item">
              <h3>0</h3>
              <p>Total Invite</p>
            </div>
          </div>
          <div className="team-code">
            <div className="team-code-item">
              <h3>Invitation Code</h3>
              <div
                className="team-code-copy"
                onClick={() => copyToClipboard('1422ce3e')}
              >
                <div className="team-code-input">1422ce3e</div>
                <div className="copy">COPY</div>
              </div>
            </div>
            <div className="team-code-item">
              <h3>Invitation Link</h3>
              <div
                className="team-code-copy"
                onClick={() => copyToClipboard('https://aaalab.club/register?inviteCode=1422ce3e')}
              >
                <div className="team-code-input">https://aaalab.club/register?inviteCode=1422ce3e</div>
                <div className="copy">COPY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="record-tab">
        <a href="#" className="active">TEAM B</a>
        <a href="#">TEAM C</a>
        <a href="#">TEAM D</a>
      </div>
      <div className="teamList">
        <ul>
          <li>
            <h3>0</h3>
            <span>Valid</span>
          </li>
          <li>
            <h3>₹ 0</h3>
            <span>Income</span>
          </li>
          <li>
            <h3>0%</h3>
            <span>Profit</span>
          </li>
        </ul>
        <table>
          <thead>
            <tr>
              <td>Mobile Phone</td>
              <td>Referrer</td>
              <td>Max Order</td>
            </tr>
          </thead>
          <tbody>
            {teamData.map((item, index) => (
              <tr key={index}>
                <td>{item.mobile}</td>
                <td>{item.referrer}</td>
                <td>₹ {item.max}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {loading && <p>Loading more data...</p>}
        <button onClick={() => setPage(page + 1)}>Load More</button>
      </div>
    </div>
  );
}

export default Team;
