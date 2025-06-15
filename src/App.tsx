import { useState } from 'react';
import { AlertBox } from './components/AlertBox/AlertBox';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [showProfileAlert, setShowProfileAlert] = useState(false);

  const user = {
    id: '1',
    name: 'John Doe',
    email: 'johndoe@example.com',
    role: 'Software Engineer',
    avatarUrl: 'https://i.pravatar.cc/150?img=12'
  };

  const product = {
    id: '1',
    name: 'Wireless Headphones',
    price: 199.99,
    description: 'High-quality wireless headphones with noise cancellation.',
    imageUrl: 'https://images.pexels.com/photos/28920288/pexels-photo-28920288/free-photo-of-modern-white-wireless-headphones-on-gray-surface.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    inStock: true
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      {showAlert && (
        <AlertBox
          type="success"
          message="Item added!"
          onClose={() => setShowAlert(false)}
        >
          <p className="text-sm text-gray-600">You can continue shopping.</p>
        </AlertBox>
      )}

      {showProfileAlert && (
        <AlertBox
          type="success"
          message="Your profile has been updated successfully!"
          onClose={() => setShowProfileAlert(false)}
        >
          <p className="text-sm">You can now continue using the application.</p>
        </AlertBox>
      )}

      <UserProfileCard
        user={user}
        showEmail={true}
        showRole={true}
        onEdit={() => setShowProfileAlert(true)}
      >
        <div className="text-sm text-gray-500">Last login: 2 hours ago</div>
      </UserProfileCard>

      <ProductDisplay
        product={product}
        showDescription={true}
        showStockStatus={true}
        onAddToCart={() => setShowAlert(true)}
      >
        <div className="text-xs text-gray-500">
          Free shipping on orders over $20
        </div>
      </ProductDisplay>
    </div>
  );
}

export default App;
