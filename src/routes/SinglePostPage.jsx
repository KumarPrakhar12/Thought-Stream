import Image from "../components/Image";
import { Link } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, non.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">Vishal</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laudantium libero aspernatur dicta recusandae assumenda reiciendis fuga vero autem excepturi!</p>
        </div>
        
          <div className="hidden lg:block w-2/5">
            <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
          </div>

    </div>
     {/* content */}
     <div className="flex flex-col md:flex-row gap-12 justify-between">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id molestiae placeat ea quas necessitatibus! Aperiam, ipsum? Ratione, reprehenderit? Consectetur, veritatis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facere consequuntur tempore error nemo, quos incidunt! Doloribus autem officia sint.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dolore eius, pariatur non aliquid quam ratione fugiat alias nisi laudantium.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati incidunt aperiam cum ad laborum nihil nulla quidem ducimus aliquam dignissimos.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum neque rem quam maiores voluptatibus possimus ducimus delectus, maxime aut repellat pariatur dignissimos nesciunt laboriosam odio sit porro et, adipisci atque.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est repellat velit distinctio inventore? Possimus assumenda tempore esse enim laudantium rerum temporibus corrupti, reiciendis dolore a iusto exercitationem neque officiis! Aperiam!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum temporibus, doloribus cumque perspiciatis, sapiente expedita, quo rerum accusamus ab dolores debitis veniam eligendi natus possimus ipsa doloremque voluptatibus ipsam a!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nisi ipsa veniam numquam sequi quia maiores excepturi earum corrupti fugit eos nemo aliquid nihil ipsum impedit iure, doloremque corporis illo illum molestias cum! Laboriosam debitis delectus praesentium inventore tempore nostrum, vel beatae voluptate tenetur expedita iure nulla deleniti rerum quos velit perspiciatis autem reprehenderit enim maiores libero non. Nobis maiores nihil repudiandae quisquam, placeat, repellendus dolor consectetur nisi sequi exercitationem laborum aperiam ex officiis consequuntur quis atque aut culpa illo deserunt eum voluptas? Harum quas ipsam, molestias quod ab consequatur autem. Provident saepe repudiandae inventore temporibus nam exercitationem magnam nihil?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore mollitia corrupti quod voluptatem repellat officia eligendi odit voluptas, vero suscipit dolor repudiandae, tenetur sequi veritatis ex perferendis illum veniam autem natus asperiores. Accusantium nobis aut aspernatur possimus, eveniet beatae mollitia porro dolorem aliquid expedita adipisci totam fugit, quisquam eligendi corporis odit accusamus reiciendis magnam eos nulla quaerat officia? Qui quos voluptate accusamus nulla, saepe, recusandae, pariatur alias temporibus accusantium sequi ipsa autem consequatur sunt veniam commodi quo. Facere eius recusandae atque quaerat ullam similique sint architecto a cum, ad culpa repudiandae odit iusto. Nemo iste deserunt, at nostrum praesentium voluptates.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugiat placeat harum molestias non unde, consectetur inventore a, doloremque enim possimus repellendus, tenetur alias et asperiores delectus nihil autem. Quidem iure corrupti mollitia saepe voluptate explicabo? Repellat exercitationem dolorum molestiae assumenda id consequatur quos voluptatibus consectetur ex est aut quas quidem laudantium optio labore, odio sequi debitis temporibus cupiditate porro et sed accusamus! Totam explicabo, neque iusto blanditiis, reprehenderit, delectus quod nostrum cumque exercitationem molestiae modi repellat beatae! Vel, omnis sed quidem porro quia culpa pariatur cumque vitae. Assumenda ducimus nesciunt doloribus cumque id culpa provident illo? Quos, repellat ipsum.</p>
          </div>
           {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              
                <Image
                  src="userImg.jpeg"
                  className="w-12 h-12 rounded-full object-cover"
                  w="48"
                  h="48"
                />
              <Link className="text-blue-800">vishalk</Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions></PostMenuActions>
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      
    </div>
  )
}

export default SinglePostPage;
