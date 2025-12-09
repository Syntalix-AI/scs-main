import React from 'react';
import { Nav } from '@/components/Navbar';
import { Foot } from '@/components/Footer';

const Careers = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Nav />
            <main className="flex-grow flex items-center justify-center">
                <div className="text-center space-y-4 px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary">Careers</h1>
                    <p className="text-xl text-muted-foreground">
                        We currently have no openings now.
                    </p>
                    <p className="text-sm text-gray-500">
                        Please check back later or follow us on LinkedIn for updates.
                    </p>
                </div>
            </main>
            <Foot />
        </div>
    );
};

export default Careers;
