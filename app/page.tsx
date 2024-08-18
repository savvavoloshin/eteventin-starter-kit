import { BlogPosts } from 'app/components/posts'
import Image from 'next/image';

export default function Page() {
  return (
    <section>
      <Image
              priority
              src="/img/eteventin/eteventin_1.png"
              height={144}
              width={144}
              alt=""
            />
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Гравёр, охотник и косторез: Этевентин Станислав Викторович
      </h1>
      <p className="mb-4">
        {`Уэлен - край охотников, косторезов - не тронутый цивилизацией. Хотя, чего уж - тронутый. Да и не все - охотники.`}
      </p>

      <p className="mb-4">
        {`Кратко:
Отец оставил бормашинки Foredom, Этевентин купил их по цене китайских, а на следующий день, когда я осознал, что машинки американские, сказал: "я не знаю, я в отпуске. Что куплено - то куплено." Мой отец, вообще, любил хорошие инструменты - Немецкие, Американские, Японские (Китай тоже имелся, но сделанный по заказу Англии, тоже качественно, например Recordpower DML250 - небольшой токарный станок)... И в Уэлене это небыло секретом, для тех, кто интересовался. А Станислав - давно уже работает косторезом и кому знать, как не ему. А я посмотрел в Интернет по запросу "бормашинка Foredom" - ценники 6-10 т., ну я и подумал, что они не дорогие. Потом рассмотрел, что есть ценники 50-60 т. на те же, свиду, машинки... Вобщем, я сам, конечно, Станиславу предложил купить две машинки по 7 тысяч. И Станислав переспросил - чтобы я проговорил цену ещё раз. А на следующий день, когда я позвонил и сказал, что ошибся, он сказал, что "ты ошибся, а я то тут при чём?" - разумно. Можно ещё детализировать историю: Станислав мне говорил "откуда ты знаешь, что они не китайские?". А я уже в мастерской поинтересовался. Как будто он не  знал сам - в это неверится. Станислав обманщик (Иненкемчичевыльин, чук.), не ожидал я, что он непримянет воспользоваться случаем - моей ошибкой.`}
      </p>

      <p className="mb-4">
        {`Как я хотел бы, чтобы было?
Дядя Стас сказал бы мне: "Семь тысяч? Савва, по таккой цене продаются китайские, а у твоего отца машинки оригинальные. Ты бы подумал ещё, потом поговорим...", но дядя Стас поступил иначе - он прикидываться стал, что сам не знал, а то что я ошибся его не касается, "что продано, то продано". Когда я это понял, мне стало нехорошо. Не только из-за денег, но от такого отношения, от лжи.`}
      </p>

      

      

      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Музыкант, рокер: Кобус Константин
      </h1>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
