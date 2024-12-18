import BlogCard from '@/components/BlogCard';
import ProfileCard from '@/components/ProfileCard';
import { getBlogs } from '@/lib/blogs';


export default function Home() {
  const blogs = getBlogs();

  console.log(blogs);
  return (
    <main className="flex">
      <ProfileCard />
      <div>
        {blogs.map(blog =>
          <BlogCard key={blog.title}{...blog} />
        )
        }
      </div>
    </main>
  );
}