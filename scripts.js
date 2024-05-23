document.addEventListener('DOMContentLoaded', function () {
    const blogs = [
        {
            title: "The Art of Cooking",
            description: "Discover the joy of cooking with these easy-to-follow recipes and cooking tips.",
            tags: ["Cooking", "Recipes", "Food"],
            author: "John Doe",
            read_count: 100,
            reading_time: 10,
            body: "A culinary art is the art of cooking. Cooking is the process of preparing food and meals that will be eaten or the food served to other people."
        },
        {
            title: "Traveling on a Budget",
            description: "Explore the world without breaking the bank! Learn how to travel affordably with these budget-friendly travel tips.",
            tags: ["Travel", "Budget", "Adventure"],
            author: "Jane Smith",
            read_count: 150,
            reading_time: 15,
            body: "Budget travel is travel that is cost-conscious and price-aware. A budget traveler is someone who travels usually finding cheap flight tickets, low-cost accommodations, wallet-friendly food, and free or cheap tourist attractions to visit while there."
        },
        {
            title: "The Benefits of Yoga",
            description: "Discover the physical and mental health benefits of practicing yoga regularly.",
            tags: ["Yoga", "Health", "Wellness"],
            author: "Emily Johnson",
            read_count: 80,
            reading_time: 8,
            body: "Yoga offers physical and mental health benefits for people of all ages. And, if you’re going through an illness, recovering from surgery or living with a chronic condition, yoga can become an integral part of your treatment and potentially hasten healing. "
        },
        {
            title: "Introduction to Machine Learning",
            description: "Learn the basics of machine learning and how it's revolutionizing various industries.",
            tags: ["Machine Learning", "Artificial Intelligence", "Technology"],
            author: "Alex Williams",
            read_count: 200,
            reading_time: 20,
            body: "Machine learning (ML) is a branch of artificial intelligence (AI) that enables computers to “self-learn” from training data and improve over time, without being explicitly programmed. Machine learning algorithms are able to detect patterns in data and learn from them, in order to make their own predictions."
        }
        
        
    ];

    renderBlogs(blogs);

    // Function to render blogs
    function renderBlogs(blogs) {
        const blogListContainer = document.getElementById('blog-list');

        // Clear existing content
        blogListContainer.innerHTML = '';

        // Iterate over blogs and create HTML elements
        blogs.forEach(blog => {
            const blogItem = document.createElement('div');
            blogItem.classList.add('blog-item');
            blogItem.innerHTML = `
                <h2>${blog.title}</h2>
                <p>${blog.description}</p>
                <p>Author: ${blog.author}</p>
                <p>Tags: ${blog.tags.join(', ')}</p>
                <p>Read count: ${blog.read_count}</p>
                <p>Reading time: ${blog.reading_time} minutes</p>
                <p>${blog.body}</p>
            `;
            blogListContainer.appendChild(blogItem);
        });
    }
});
