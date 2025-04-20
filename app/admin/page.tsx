'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    // In a real application, you would check if the user is an admin here
    const isAdmin = checkAdminStatus(); // Replace with your actual admin check

    if (!isAdmin) {
      router.push('/login'); // Redirect to login if not an admin
    }
  }, [router]);

  // Placeholder for admin status check
  const checkAdminStatus = () => {
    // Implement your logic to determine if the user is an admin
    // This might involve checking user roles from a session or database
    return true; // For now, allow access
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
        {/* Add admin-specific content here */}
        <p>Welcome to the admin area.</p>
        {/* Example: Links to manage jobs, users, etc. */}
      </div>
    </div>
  );
}