import HeroCover from './components/HeroCover';
import FeatureGrid from './components/FeatureGrid';
import RoleShowcase from './components/RoleShowcase';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-950 text-white">
      {/* Hero with Spline 3D cover */}
      <HeroCover />

      {/* Features */}
      <FeatureGrid />

      {/* Roles */}
      <RoleShowcase />

      {/* Footer */}
      <FooterCTA />
    </div>
  );
}

export default App;
