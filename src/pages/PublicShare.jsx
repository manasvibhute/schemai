import React, { useState } from 'react';
import { Database, Copy, Download, Eye, Code, ExternalLink, Clock, User } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';

const PublicShare = () => {
    const [viewMode, setViewMode] = useState('visual');
    const [copied, setCopied] = useState(false);

    // Mock shared schema data
    const schema = {
        id: 'abc123',
        name: 'E-commerce Platform',
        author: 'John Doe',
        lastUpdated: '2 days ago',
        description: 'Complete database schema for an online shopping platform with products, orders, and user management.',
        tables: 12,
        relationships: 15
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center">
                            <Database className="text-white" size={24} />
                        </div>
                        <div>
                            <h1 className="text-3xl lg:text-4xl font-bold text-white">{schema.name}</h1>
                            <div className="flex items-center gap-4 mt-1 text-sm text-slate-400">
                                <div className="flex items-center gap-1">
                                    <User size={14} />
                                    <span>by {schema.author}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock size={14} />
                                    <span>Updated {schema.lastUpdated}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-slate-300 max-w-3xl">{schema.description}</p>
                </div>

                {/* Action Bar */}
                <GlassCard className="p-4 mb-6">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3 text-sm text-slate-400">
                            <span className="flex items-center gap-1">
                                <Database size={16} />
                                {schema.tables} tables
                            </span>
                            <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                            <span>{schema.relationships} relationships</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={handleCopy}
                                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white flex items-center gap-2 border border-white/10 transition"
                            >
                                <Copy size={18} />
                                <span>{copied ? 'Copied!' : 'Copy Link'}</span>
                            </button>
                            <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white flex items-center gap-2 border border-white/10 transition">
                                <Download size={18} />
                                <span className="hidden sm:inline">Export SQL</span>
                            </button>
                            <a
                                href="/signup"
                                className="px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white font-medium flex items-center gap-2 transition-all duration-300"
                            >
                                <span>Create Your Own</span>
                                <ExternalLink size={18} />
                            </a>
                        </div>
                    </div>
                </GlassCard>

                {/* View Toggle */}
                <div className="flex items-center gap-2 mb-6">
                    <button
                        onClick={() => setViewMode('visual')}
                        className={`px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition ${viewMode === 'visual'
                                ? 'bg-gradient-to-r from-violet-600 to-pink-600 text-white shadow-lg'
                                : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
                            }`}
                    >
                        <Eye size={18} />
                        <span>Visual Schema</span>
                    </button>
                    <button
                        onClick={() => setViewMode('sql')}
                        className={`px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition ${viewMode === 'sql'
                                ? 'bg-gradient-to-r from-violet-600 to-pink-600 text-white shadow-lg'
                                : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
                            }`}
                    >
                        <Code size={18} />
                        <span>SQL Code</span>
                    </button>
                </div>

                {/* Schema Viewer */}
                <GlassCard className="p-0 overflow-hidden" glow>
                    {viewMode === 'visual' ? (
                        // Visual Schema View
                        <div className="aspect-video bg-gradient-to-br from-violet-900/20 to-pink-900/20 flex items-center justify-center relative">
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>

                            {/* Mock Schema Visualization */}
                            <div className="relative z-10 w-full h-full p-8">
                                <div className="grid grid-cols-3 gap-6 h-full">
                                    {/* Mock Table Cards */}
                                    {['users', 'products', 'orders', 'categories', 'reviews', 'payments'].map((table, index) => (
                                        <div
                                            key={index}
                                            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-4 hover:bg-white/15 transition"
                                        >
                                            <div className="flex items-center gap-2 mb-3">
                                                <Database size={16} className="text-violet-400" />
                                                <h3 className="text-white font-semibold text-sm">{table}</h3>
                                            </div>
                                            <div className="space-y-1.5">
                                                {[1, 2, 3].map((field) => (
                                                    <div key={field} className="text-xs text-slate-400 flex items-center gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                                                        <span>field_{field}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        // SQL Code View
                        <div className="bg-[#0a0510] p-6 overflow-auto max-h-[600px]">
                            <pre className="text-sm text-slate-300 font-mono">
                                <code>{`-- E-commerce Platform Database Schema
-- Generated with SchemaAI
-- Author: ${schema.author}
-- Last Updated: ${schema.lastUpdated}

-- Users Table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  phone VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Products Table
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  stock_quantity INTEGER DEFAULT 0,
  category_id INTEGER REFERENCES categories(id),
  image_url VARCHAR(500),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Categories Table
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  parent_id INTEGER REFERENCES categories(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Orders Table
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  total_amount DECIMAL(10, 2) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  shipping_address TEXT,
  billing_address TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Order Items Table
CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(id),
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Reviews Table
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(id),
  user_id INTEGER REFERENCES users(id),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Payments Table
CREATE TABLE payments (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(id),
  amount DECIMAL(10, 2) NOT NULL,
  payment_method VARCHAR(50),
  transaction_id VARCHAR(255),
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for better performance
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_orders_user ON orders(user_id);
CREATE INDEX idx_order_items_order ON order_items(order_id);
CREATE INDEX idx_order_items_product ON order_items(product_id);
CREATE INDEX idx_reviews_product ON reviews(product_id);
CREATE INDEX idx_payments_order ON payments(order_id);`}</code>
                            </pre>
                        </div>
                    )}
                </GlassCard>

                {/* Info Banner */}
                <GlassCard className="mt-6 p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">
                        Like this schema?
                    </h3>
                    <p className="text-slate-300 mb-4">
                        Create your own AI-powered database schemas in minutes with SchemaAI
                    </p>
                    <a
                        href="/signup"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white shadow-lg shadow-violet-500/50 transition-all duration-300"
                    >
                        Get Started Free
                        <ExternalLink size={18} />
                    </a>
                </GlassCard>
            </div>
        </div>
    );
};

export default PublicShare;