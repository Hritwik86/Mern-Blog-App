import React from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import Loader from '../components/ui/Loader';
import EmptyState from '../components/ui/EmptyState';
import ErrorState from '../components/ui/ErrorState';

const ComponentDemo = () => {
  return (
    <>
      <div className="p-6 space-y-4">
        <Button>Click Me</Button>
        <Input placeholder="Enter Your Name Please..." />
        <Card>
          <h2>Card Title</h2>
          <p>Card Content</p>
        </Card>
        <Loader />
        <EmptyState childrenMessage="No Data Found yet" />
        <ErrorState messagePart="Something Went wrong" />
      </div>
    </>
  );
};

export default ComponentDemo;
