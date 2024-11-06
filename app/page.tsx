// import { BlogPosts } from 'app/components/posts'
import Image from 'next/image';
import Head from 'next/head'

export default function Page() {
  return (


    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Гравёр, охотник и косторез - Этевентин Станислав Викторович
      </h1>

      <Image
        priority
        src="/img/eteventin/eteventin_1.png"
        height={240}
        width={240}
        alt=""
        id="hp"
      />

      <p className="mb-4">
        {`Уэлен - край охотников, косторезов.`}
      </p>

      <br>
      </br>

      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Музыкант, рокер: Кобус Константин
      </h1>
      <Image
              priority
              src="/img/kobus/a2.jpg"
              height={240}
              width={240}
              alt=""
              id="hp"
            />
            <Image
              priority
              src="/img/kobus/a1.jpg"
              height={240}
              width={240}
              alt=""
              id="hp"
            />
            <p className="mb-4">
       Товарищь Константин.</p>
      
       <Image
              priority
              src="/img/kobus/b1.jpg"
              height={240}
              width={240}
              alt=""
              id="hp"
            />

      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Савченко Групп
      </h1>
      <Image
              priority
              src="/img/savch.webp"
              // height={144}
              // width={144}
              alt=""
              id="hp"
            />
            <p className="mb-4">
              Ну, и для нечётного числа - Савченко Групп (https://savchenko.group/), "группа проектов и команда профессионалов объединенные нашим организатором Дмитрием Савченко"...
              На вакансию программиста - выдали тестовое задание, сроком на неделю. Задание безидейное, но технически не совсем простое - то есть, поработать нужно, чтобы сделать - два-три дня реальной работы, аккуратно и сосредоточенно. Выслал решение в срок, продублировал в Телеграм. Никакого ответа...
            </p>
            <p className="mb-4">
              Через, примерно месяц (может два - много чести поднимать переписку) мне приходит на почту письмо, мол, мы заинтересованы, ваша кандидатура в приоритете. И через час-два того же дня: что-то вроде "мы сделали выбор в пользу другого кандидата, спасибо". 
            </p>
            <p className="mb-4">
              Чтож, пожалуйста. Обращайтесь.
            </p>

      

      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
