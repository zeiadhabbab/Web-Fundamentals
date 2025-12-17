function Home(){
    const featuredPosts = [
        {
            id: 1,
            title: "Getting Started with React Router",
            excerpt: "Learn how to implement routing in your React applications with React Router. This comprehensive guide covers everything from basic setup to advanced patterns.",
            date: "March 15, 2024",
            author: "John Doe"
        },
        {
            id: 2,
            title: "Modern Web Development Best Practices",
            excerpt: "Discover the latest trends and best practices in modern web development. From component architecture to performance optimization.",
            date: "March 10, 2024",
            author: "Jane Smith"
        }
    ];

    const recentPosts = [
        {
            id: 3,
            title: "Understanding TypeScript in React",
            excerpt: "A deep dive into using TypeScript with React to build type-safe applications.",
            date: "March 5, 2024",
            author: "Mike Johnson"
        },
        {
            id: 4,
            title: "CSS Grid vs Flexbox: When to Use What",
            excerpt: "Learn the differences between CSS Grid and Flexbox and when to use each layout method.",
            date: "March 1, 2024",
            author: "Sarah Williams"
        },
        {
            id: 5,
            title: "Building Responsive Web Applications",
            excerpt: "Tips and techniques for creating responsive designs that work across all devices.",
            date: "February 25, 2024",
            author: "David Brown"
        }
    ];

    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Welcome to Our Blog</h1>
                    <p className="hero-subtitle">Discover the latest insights, tutorials, and stories about web development</p>
                </div>
            </section>

            {/* Featured Posts Section */}
            <section className="featured-section">
                <div className="section-container">
                    <h2 className="section-title">Featured Posts</h2>
                    <div className="posts-grid">
                        {featuredPosts.map(post => (
                            <article key={post.id} className="post-card featured-card">
                                <div className="post-meta">
                                    <span className="post-date">{post.date}</span>
                                    <span className="post-author">By {post.author}</span>
                                </div>
                                <h3 className="post-title">{post.title}</h3>
                                <p className="post-excerpt">{post.excerpt}</p>
                                <button className="read-more-btn">Read More</button>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Posts Section */}
            <section className="recent-section">
                <div className="section-container">
                    <h2 className="section-title">Recent Posts</h2>
                    <div className="posts-list">
                        {recentPosts.map(post => (
                            <article key={post.id} className="post-card recent-card">
                                <div className="post-header">
                                    <h3 className="post-title">{post.title}</h3>
                                    <div className="post-meta">
                                        <span className="post-date">{post.date}</span>
                                        <span className="post-author">By {post.author}</span>
                                    </div>
                                </div>
                                <p className="post-excerpt">{post.excerpt}</p>
                                <button className="read-more-btn">Read More</button>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;