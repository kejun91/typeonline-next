export const runtime = 'edge';

export default function ProfilePage({ params }) {
    const { id } = params;
  
    return (
      <div>
        <h1>Profile Page</h1>
        <p>Welcome to the profile of user with ID: {id}</p>
      </div>
    );
  }
  