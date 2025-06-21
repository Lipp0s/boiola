import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const isDaytime = currentTime.getHours() >= 6 && currentTime.getHours() < 18;

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">🐔 Boiola</div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#food">Food</a></li>
            <li><a href="#activities">Activities</a></li>
            <li><a href="#friends">Friends</a></li>
            <li><a href="#weather">Weather</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="highlight">Boiola</span>
          </h1>
          <p className="hero-subtitle">
            The Ultimate Chicken Paradise! 🐔
          </p>
          <p className="hero-description">
            Your daily dose of fun, food, and feathery adventures!
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Find Food</button>
            <button className="btn btn-secondary">Meet Friends</button>
          </div>
          <div className="chicken-status">
            <p>🕐 Current Time: {currentTime.toLocaleTimeString()}</p>
            <p>{isDaytime ? '☀️ Daytime - Perfect for scratching!' : '🌙 Nighttime - Time to roost!'}</p>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-chickens">
            <div className="chicken chicken-1">🐔</div>
            <div className="chicken chicken-2">🐤</div>
            <div className="chicken chicken-3">🥚</div>
            <div className="chicken chicken-4">🐓</div>
          </div>
        </div>
      </section>

      {/* Food Section */}
      <section id="food" className="food">
        <div className="container">
          <h2 className="section-title">🍽️ Today's Menu</h2>
          <div className="food-grid">
            <div className="food-card">
              <div className="food-image">
                <span className="food-emoji">🌾</span>
              </div>
              <div className="food-content">
                <h3>Fresh Seeds</h3>
                <p>Premium mixed seeds for energy</p>
                <div className="food-rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            <div className="food-card">
              <div className="food-image">
                <span className="food-emoji">🥬</span>
              </div>
              <div className="food-content">
                <h3>Green Vegetables</h3>
                <p>Fresh lettuce and spinach</p>
                <div className="food-rating">⭐⭐⭐⭐</div>
              </div>
            </div>
            <div className="food-card">
              <div className="food-image">
                <span className="food-emoji">🪱</span>
              </div>
              <div className="food-content">
                <h3>Worms & Bugs</h3>
                <p>Protein-rich treats</p>
                <div className="food-rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            <div className="food-card">
              <div className="food-image">
                <span className="food-emoji">🌽</span>
              </div>
              <div className="food-content">
                <h3>Corn & Grains</h3>
                <p>Delicious corn kernels</p>
                <div className="food-rating">⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="activities">
        <div className="container">
          <h2 className="section-title">🎯 Fun Activities</h2>
          <div className="activities-content">
            <div className="activity-list">
              <div className="activity-item">
                <span className="activity-icon">🏃‍♀️</span>
                <div className="activity-info">
                  <h3>Morning Run</h3>
                  <p>Time to stretch those legs and wings!</p>
                </div>
              </div>
              <div className="activity-item">
                <span className="activity-icon">🛁</span>
                <div className="activity-info">
                  <h3>Dust Bath</h3>
                  <p>Keep those feathers clean and healthy</p>
                </div>
              </div>
              <div className="activity-item">
                <span className="activity-icon">🎵</span>
                <div className="activity-info">
                  <h3>Singing Practice</h3>
                  <p>Cock-a-doodle-doo! Perfect your morning call</p>
                </div>
              </div>
              <div className="activity-item">
                <span className="activity-icon">🏠</span>
                <div className="activity-info">
                  <h3>Nest Building</h3>
                  <p>Create the perfect cozy spot</p>
                </div>
              </div>
            </div>
            <div className="activity-stats">
              <div className="stat-card">
                <h3>Daily Steps</h3>
                <p className="stat-number">1,234</p>
                <p>steps today</p>
              </div>
              <div className="stat-card">
                <h3>Eggs Laid</h3>
                <p className="stat-number">3</p>
                <p>this week</p>
              </div>
              <div className="stat-card">
                <h3>Friends Made</h3>
                <p className="stat-number">12</p>
                <p>in the coop</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Friends Section */}
      <section id="friends" className="friends">
        <div className="container">
          <h2 className="section-title">🐥 Coop Friends</h2>
          <div className="friends-grid">
            <div className="friend-card">
              <div className="friend-avatar">🐔</div>
              <h3>Henrietta</h3>
              <p>Queen of the coop</p>
              <div className="friend-status online">Online</div>
            </div>
            <div className="friend-card">
              <div className="friend-avatar">🐓</div>
              <h3>Rusty</h3>
              <p>Morning alarm clock</p>
              <div className="friend-status online">Online</div>
            </div>
            <div className="friend-card">
              <div className="friend-avatar">🐤</div>
              <h3>Chickie</h3>
              <p>Youngest member</p>
              <div className="friend-status offline">Sleeping</div>
            </div>
            <div className="friend-card">
              <div className="friend-avatar">🦆</div>
              <h3>Ducky</h3>
              <p>Neighbor from the pond</p>
              <div className="friend-status online">Online</div>
            </div>
          </div>
        </div>
      </section>

      {/* Weather Section */}
      <section id="weather" className="weather">
        <div className="container">
          <h2 className="section-title">🌤️ Coop Weather</h2>
          <div className="weather-content">
            <div className="weather-card">
              <div className="weather-icon">☀️</div>
              <h3>Today's Forecast</h3>
              <p className="temperature">22°C</p>
              <p>Perfect for outdoor activities!</p>
              <div className="weather-details">
                <div className="weather-detail">
                  <span>Humidity: 65%</span>
                </div>
                <div className="weather-detail">
                  <span>Wind: Light breeze</span>
                </div>
                <div className="weather-detail">
                  <span>UV Index: Moderate</span>
                </div>
              </div>
            </div>
            <div className="weather-tips">
              <h3>🐔 Chicken Tips</h3>
              <ul>
                <li>Great weather for dust bathing!</li>
                <li>Perfect temperature for egg laying</li>
                <li>Good time to forage for bugs</li>
                <li>Remember to stay hydrated</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">🐔 Boiola</div>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#food">Food</a>
              <a href="#activities">Activities</a>
              <a href="#friends">Friends</a>
              <a href="#weather">Weather</a>
            </div>
            <div className="footer-social">
              <span className="social-link">🐔</span>
              <span className="social-link">🐤</span>
              <span className="social-link">🥚</span>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Boiola - Made with ❤️ for chickens everywhere</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
