import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Гравёр, охотник и косторез: Этевентин Станислав Викторович
      </h1>
      <p className="mb-4">
        {`Уэлен - край охотников, косторезов - не тронутый цивилизацией. Хотя, чего уж - тронутый. Да и не все - охотники.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
