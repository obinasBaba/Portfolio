import React, {useEffect} from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import STrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(STrigger);

const ST = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  border: thick solid red;
  min-height: 200vh;
  //gap: 10rem;
  padding: 5rem;
  
  .track{
    //padding: 1rem;
    height: 100vh;
    border: thin dashed #00CCFF;
    display: flex;
    //width: max-content;
  }
  
  .items_wrapper{
    border: thin dashed palegoldenrod;
    height: 80vh;
    width: max-content;
    padding: 2rem;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap: 3rem;
    margin: auto 0;
  }
  
  .box {
  
    width: 550px;
    height: 400px;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #1b5564;
    margin: 3rem 0;
    font-size: 4rem;
    font-weight: bolder;
  }
`

const ScrollTrigger = () => {

  useEffect(() => {
    // return;
    gsap.set('.items_wrapper', {x: '400px'})

    let sections = gsap.utils.toArray(".box");

    gsap.to(sections, {
      x: -(document.querySelector('.items_wrapper').offsetWidth - 400),
      ease: "none",

      scrollTrigger: {
        markers: true,
        // scroller: '.sContainer',
        trigger: '.track',
        scrub: 1.5,
        pin: true,
        start: 'top 15%',
        end: '+=' + document.querySelector('.items_wrapper').offsetWidth + 'px',
      },

    })
  }, [])

  return (
    <ST className='sContainer' >
      <div className="track">
        <div className="items_wrapper">
          <div className="box a">A</div>
          <div className="box b">B</div>
          <div className="box c">C</div>
          <div className="box d">D</div>
          <div className="box e">E</div>
        </div>

        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, sint voluptate? Beatae deleniti, dolorem dolorum ea iusto maxime, mollitia optio ratione rem repudiandae sed similique suscipit voluptatum! A ab accusamus accusantium amet animi beatae, commodi consequatur culpa, cum delectus dolore ea eius expedita facilis hic id minima nam nesciunt nihil numquam placeat, quam quasi ratione rem repudiandae saepe similique suscipit tempora totam unde veniam vitae voluptatem voluptates. Ab alias architecto at corporis dignissimos dolorem est illo ipsam maiores non quis quod suscipit, temporibus velit voluptates! Aliquam deleniti doloribus explicabo minus, nostrum quam quas quibusdam rem rerum sit soluta tenetur. Adipisci, atque, eligendi? Alias asperiores aspernatur at atque aut autem blanditiis consequatur cumque delectus deleniti distinctio ducimus eaque esse explicabo fugit iure libero maiores natus nobis, pariatur possimus qui quibusdam quod reiciendis repellat soluta suscipit tenetur totam veritatis voluptatem! Aliquid aspernatur consequuntur cumque debitis dolor dolorem doloremque enim et eum expedita ipsa laborum maiores neque nisi odio odit possimus provident quisquam, quod quos rem saepe, sapiente, voluptatem! Aliquam aperiam consectetur debitis doloremque ea illum itaque labore, officiis quam quibusdam repellat sit, soluta tenetur unde voluptate! Atque consequatur consequuntur, eos eum nisi voluptas? Accusamus consequuntur, corporis cum dignissimos dolorem ducimus eaque enim esse eveniet facilis id in laudantium molestias necessitatibus nihil odit possimus quaerat sint sunt voluptas? Dignissimos error, officiis possimus praesentium qui veritatis! Ad architecto cum dolores eaque eius enim eos eum fugit, harum incidunt, laboriosam magni maiores nam, neque obcaecati odio optio porro quam quod recusandae sequi similique sunt suscipit! Beatae cumque dolore est facilis hic, itaque, magnam minus molestiae officia porro possimus provident quisquam rerum tenetur, ullam! Ad asperiores cum dignissimos doloribus eos id, maiores minima nihil, perferendis praesentium quis ut veritatis voluptate. Animi atque autem cum doloribus eveniet illum incidunt molestias non praesentium, provident, quae quas quidem quod, sapiente sed sunt voluptatibus. Ad asperiores beatae culpa cupiditate doloribus, earum enim facilis fuga magni maiores, nostrum officia pariatur provident qui recusandae repellat veniam vitae voluptas! Atque consequuntur delectus dignissimos eaque enim exercitationem, explicabo illo, impedit laudantium modi molestiae nesciunt nostrum odit quaerat qui quo rerum? Aliquam animi blanditiis earum eligendi eum, harum hic in itaque iure mollitia nisi pariatur perferendis perspiciatis quod quos reprehenderit vero? Accusamus aliquid architecto at deserunt dolores dolorum ducimus fugiat, harum magnam necessitatibus nesciunt nihil odit praesentium quam quod totam unde veritatis! Eligendi, obcaecati unde? Commodi cum deleniti dolorem hic laudantium natus officiis repellat totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consectetur consequuntur distinctio non omnis, pariatur temporibus. A aliquid architecto assumenda minima, minus provident quam quos sapiente soluta vero. Animi autem cumque ea nam quibusdam rem veritatis! Architecto culpa eveniet iure libero nesciunt perferendis. Beatae est, incidunt inventore iste itaque natus nemo, odio porro quibusdam quod repudiandae sapiente sunt suscipit ut vitae! Ab accusamus consectetur cupiditate dolores eius enim illum nulla numquam odio officia praesentium provident repellat suscipit, totam veniam. A excepturi magnam minima ullam. Alias architecto assumenda atque aut commodi deserunt dolor doloremque, dolorum ducimus eaque enim et eum eveniet inventore magni maiores, necessitatibus nobis perspiciatis placeat possimus quaerat qui quibusdam quidem quos ratione rerum sapiente soluta velit voluptas voluptatibus. Consectetur cumque dolorum enim error impedit minima modi numquam praesentium sunt veritatis? Ad aliquid eos et fuga, ipsa perspiciatis quidem repellendus reprehenderit? Architecto, assumenda consectetur consequatur cupiditate deleniti doloribus ea earum, eius explicabo facilis inventore ipsa libero maiores modi obcaecati praesentium quia quidem quod reiciendis repellendus tempore tenetur totam vel. Ad aspernatur dicta dolorem esse eum fugit libero magnam quae quasi qui saepe, similique sunt, tenetur voluptate voluptatibus? Animi at deserunt ex inventore laborum non quia, rem sunt veritatis voluptate.</h4>

      </div>


    </ST>
  )
}

export default ScrollTrigger
