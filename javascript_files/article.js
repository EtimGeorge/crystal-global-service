// articles.js
const articles = {
    "5-effective-business-development-strategies": {
        title: "5 Effective Business Development Strategies",
        content: `
            <p>In today's competitive market, effective business development strategies are crucial for growth and success. Here are five strategies that can help your business thrive:</p>
            <img src="/api/placeholder/800/400" alt="Business Development Strategies" class="article-image">
            <ol>
                <li><strong>Identify Your Ideal Customer:</strong> Understanding your target audience is key to tailoring your products or services to meet their needs.</li>
                <li><strong>Leverage Digital Marketing:</strong> Utilize social media, content marketing, and SEO to reach a wider audience and generate leads.</li>
                <li><strong>Build Strategic Partnerships:</strong> Collaborate with complementary businesses to expand your reach and offer more value to customers.</li>
                <li><strong>Focus on Customer Retention:</strong> It's often more cost-effective to retain existing customers than to acquire new ones. Implement loyalty programs and excellent customer service.</li>
                <li><strong>Invest in Your Team:</strong> A skilled and motivated workforce is essential for business growth. Provide ongoing training and create a positive work environment.</li>
            </ol>
            <p>By implementing these strategies, you can position your business for sustainable growth and success in the long term.</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        `
    },
    "boosting-your-merchandise-sales": {
        title: "Boosting Your Merchandise Sales",
        content: `
            <p>Increasing merchandise sales is a top priority for many businesses. Here are some innovative techniques to help boost your sales:</p>
            <img src="/api/placeholder/800/400" alt="Merchandise Sales Techniques" class="article-image">
            <ul>
                <li><strong>Create an Engaging Store Layout:</strong> Design your store to guide customers through high-value items and encourage impulse purchases.</li>
                <li><strong>Implement Cross-Selling Techniques:</strong> Suggest complementary products to increase average transaction value.</li>
                <li><strong>Offer Limited-Time Promotions:</strong> Create a sense of urgency with special offers and discounts.</li>
                <li><strong>Leverage Social Proof:</strong> Display customer reviews and testimonials to build trust and encourage purchases.</li>
                <li><strong>Optimize Your Online Presence:</strong> Ensure your e-commerce platform is user-friendly and mobile-responsive.</li>
            </ul>
            <p>Remember, the key to boosting sales is understanding your customers and providing value at every touchpoint.</p>
            <audio controls>
                <source src="path_to_your_audio_file.mp3" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        `
    },
    "effective-leadership-strategies-for-business-growth": {
        title: "Effective Leadership Strategies for Business Growth",
        content: `
            <p>Leadership plays a crucial role in driving business growth. Here are some effective strategies that leaders can employ:</p>
            <img src="/api/placeholder/800/400" alt="Leadership Strategies" class="article-image">
            <ol>
                <li><strong>Set Clear Goals and Communicate Them:</strong> Ensure everyone in the organization understands and is aligned with the company's objectives.</li>
                <li><strong>Foster Innovation:</strong> Encourage creativity and new ideas from all levels of the organization.</li>
                <li><strong>Develop Your Team:</strong> Invest in training and mentoring to build a skilled and motivated workforce.</li>
                <li><strong>Lead by Example:</strong> Demonstrate the values and work ethic you expect from your team.</li>
                <li><strong>Embrace Change:</strong> Be adaptable and open to new strategies and technologies that can drive growth.</li>
                <li><strong>Practice Effective Decision Making:</strong> Make informed decisions quickly and take calculated risks when necessary.</li>
            </ol>
            <p>By implementing these leadership strategies, you can create a positive and productive work environment that fosters growth and success.</p>
            <video width="320" height="240" controls>
                <source src="path_to_your_video_file.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `
    }
    // Add more articles here as needed
};

// Function to get article by slug
function getArticle(slug) {
    return articles[slug] || null;
}