import { useState } from 'react';
import { AlertBox } from './components/AlertBox/AlertBox';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';

function App() {
  const [showAlert, setShowAlert] = useState(false);

  const user = {
    id: '1',
    name: 'Alice',
    email: 'alice@example.com',
    role: 'Designer'
  };

  const product = {
    id: '1',
    name: 'Notebook',
    price: 14.99,
    description: 'A simple notebook.',
    inStock: true
  };

  return (
    <div style={{ padding: '1rem' }}>
      {showAlert && (
        <AlertBox
          type="success"
          message="Item added!"
          onClose={() => setShowAlert(false)}
        />
      )}

      <UserProfileCard user={user} showEmail={true} />

      <ProductDisplay
        product={product}
        showDescription={true}
        onAddToCart={() => setShowAlert(true)}
      />
    </div>
  );
}

export default App;

