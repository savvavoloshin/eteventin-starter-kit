// import { BlogPosts } from 'app/components/posts'
import Image from 'next/image';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Гравёр, охотник и косторез - Этевентин Станислав Викторович
      </h1>

      <Image
              priority
              src="/img/eteventin/eteventin_1.png"
              height={144}
              width={144}
              alt=""
              id="hp"
            />
      <p className="mb-4">
        {`Уэлен - край охотников, косторезов.`}
      </p>

      <p className="mb-4">
        {`Кратко:
Отец оставил бормашинки Foredom, Этевентин купил их по цене китайских, а на следующий день, когда я осознал, что машинки американские, сказал: "я не знаю, я в отпуске. Что куплено - то куплено." Мой отец, вообще, любил хорошие инструменты - Немецкие, Американские, Японские (Китай тоже имелся, но сделанный по заказу Англии, тоже качественно, например Recordpower DML250 - небольшой токарный станок)... И в Уэлене это небыло секретом, для тех, кто интересовался. А Станислав - давно уже работает косторезом и кому знать, как не ему.`}
</p>

<p className="mb-4">

 {`А я посмотрел в Интернет по запросу "бормашинка Foredom" - ценники 6-10 т., ну я и подумал, что они не дорогие. Потом рассмотрел, что есть ценники 50-60 т. на те же, свиду, машинки... Вобщем, я сам, конечно, Станиславу предложил купить две машинки по 7 тысяч. И Станислав переспросил - чтобы я проговорил цену ещё раз. А на следующий день, когда я позвонил и сказал, что ошибся, он сказал, что "ты ошибся, а я то тут при чём?" - разумно. Можно ещё детализировать историю: Станислав мне говорил "откуда ты знаешь, что они не китайские?". А я уже в мастерской поинтересовался. Как будто он не  знал сам - в это неверится. Станислав обманщик (Иненкемчичевыльин, чук.), не ожидал я, что он непримянет воспользоваться случаем - моей ошибкой.`}
      </p>

      <p className="mb-4">
        {`Как я хотел бы, чтобы было?
Дядя Стас сказал бы мне: "Семь тысяч? Савва, по такой цене продаются китайские, а у твоего отца машинки оригинальные. Ты бы подумал ещё, потом поговорим...", но дядя Стас поступил иначе - он прикидываться стал, что сам не знал, а то что я ошибся его не касается, "что продано, то продано". Когда я это понял, мне стало нехорошо. Не только из-за денег, но от такого отношения, от лжи.`}
      </p>

      <p className="mb-4">
        {`Кроме того, Станислав говорил, что машинки ему не очень-то и нужны, т.к. он работает на советских. При этом - отказался вернуть хотя бы одну машинку и предложил доплатить деньги (могу доплатить 10 000, больше не могу).`}
      </p>
      
      <br>
      </br>

      

      

      

      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Музыкант, рокер: Кобус Константин
      </h1>
      <Image
              priority
              src="/img/kobus/a2.jpg"
              height={144}
              width={144}
              alt=""
              id="hp"
            />
            <Image
              priority
              src="/img/kobus/a1.jpg"
              height={144}
              width={144}
              alt=""
              id="hp"
            />
      <p className="mb-4">
        В этом обьявлении некоторые детали:
      <a href="https://www.avito.ru/bolshaya_izhora/muzykalnye_instrumenty/datchiki_humbucker_ft_pickups_4177080131"> датчики humbucker - ft pickups</a>. А так, вообще, товарищь Константин продал не хорошую гитару, нахваливая её, что за такие деньги инструмент достойный. Умолчал, что ломался гриф ("я не знал, она на стене висела" - это при том, что он был другом Дмитрию (ушедшему владельцу гитары) и жил в соседнем подьезде. Не знал?). Сточенные лады, хрустящие потенциометры, "плоские" датчики - это решаемо, но сама конструкция деки - фанерный верх - вялое звучание, отсутствие "атаки" - никак не исправить. И Константин - профессиональный музыкант - рекомендовал мне сперва научиться "ездить", прежде чем говорить, что "сёдла" ржавые.
      Вобщем, подобная гитара, действительно стоит около 20 т., но Константин заявлял "отличный, рабочий инструмент" - коей гитара не являлась: нет ладов, хрустят потенциометры, пропадает сигнал.

      </p>

      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
