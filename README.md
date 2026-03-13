🚀 Project Reflection
1. Chosen Framework:  I used Tailwind CSS because I like having full control over what I am designing and feels easy to try new designs.  
(State whether you used Bootstrap or Tailwind CSS)

Why did you choose this framework for this specific business? I chose tailwind for my hobby/game store because it let me have full control over the playful vibe of the site. I was able to set variables in tailwind for the sites arcade like colors.


2. The "Hero" Component Breakdown: 
Identify one section of your code (e.g., your Navbar or Hero Section) that you are most proud of.
List 3-4 specific classes you used in this section and explain exactly what they do for the layout. (Example: md:flex-row - This class changes the layout from a vertical stack on mobile to a horizontal row on medium screens and up.)

I'm most proud of the about page, it looks simple at first but it took me a while to figure out how to zigzag the content and keep the images and text next to each other.

-To zigzag the content I used flex-row -> flex-row-reverse -> flex-row on the <div> 

-I used md:flex md:flex-row and md:flex md:flex-row-reverse to only apply the zigzag of the content on md screens and above

-I used items-center to keep the text and images next to each other and centered

-I used mx-auto on all 3 <div> to make sure the content has a margin value that puts it in the center of the page


3. The Responsive Challenge:
What was the hardest part about making your store look good on a mobile phone versus a desktop? How did you solve it using your framework?

-It was fairly easy since I used a mobile first approach and used media queries to apply classes to non-mobile tags such as making text on bigger screens bigger, using different flexes for mobile and non-mobile, and sometimes using different padding and margin values.


4. Semantic Choices:
Why did you choose a specific HTML5 semantic tag (like <article>, <section>, or <aside>) for a part of your site instead of just using a <div>? 

I used to <div> to just divide content on the webpage but used section to define sections with a bulk of content in the main. Using div to divide different content such as cards made it easier to specifically design for that tiny piece of content.