"use client";
import React, { useEffect, useState } from "react";

interface Subscriber {
  _id: string;
  email: string;
  password: string;
  createdAt: string;
}

const SubscriberList: React.FC = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await fetch("/api/getSubscribers");
        const data = await response.json();
        setSubscribers(data);
      } catch (error) {
        console.error("Error fetching subscribers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscribers();
  }, []);

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Our valuable Subscribers</h2>
      {loading ? (
        <p>Loading subscribers...</p>
      ) : (
        <ul>
          {subscribers.length > 0 ? (
            subscribers.map((subscriber) => (
              <li key={subscriber._id} className="mb-2">
                <strong>Email:</strong> {subscriber.email} <br />
                <strong>Signed Up:</strong> {new Date(subscriber.createdAt).toLocaleDateString()}
              </li>
            ))
          ) : (
            <p>No subscribers found.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default SubscriberList;
