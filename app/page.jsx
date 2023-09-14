import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen text-white bg-slate-900">
      <Image
        className="float-left"
        src="/shoes.jpg"
        alt="image"
        width={200}
        height={200}
      ></Image>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab error
        accusamus eius consectetur, nam, veritatis aliquid amet adipisci quod
        laboriosam esse maxime vel illum, hic voluptates deserunt obcaecati
        asperiores magni. Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Vero sit facere aperiam rerum. Inventore modi sunt pariatur?
        Deleniti commodi illum dolores nulla saepe. Voluptate amet nostrum earum
        ipsum numquam voluptatem molestiae reiciendis quis adipisci, inventore
        architecto perspiciatis placeat ea a ipsa consequuntur eaque tenetur,
        distinctio quaerat vero excepturi facilis! Nulla laudantium, laborum ab
        quibusdam magnam obcaecati quidem commodi maiores expedita molestiae,
        aperiam, animi aspernatur maxime beatae. Earum excepturi necessitatibus
        consequatur optio cum nulla molestiae quaerat eligendi soluta! Ratione
        dicta nobis ipsum earum optio fugit ipsa laboriosam tenetur obcaecati ab
        consequuntur aliquid provident, non est quisquam, voluptatum odit ipsam
        porro minima.
      </p>
    </div>
  );
}
