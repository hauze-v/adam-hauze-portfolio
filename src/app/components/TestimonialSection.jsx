import Image from 'next/image';

const TestimonialSection = () => {
  return (
    <>
      <h3 className="text-3xl py-1 dark:text-white">Testimonials</h3>
      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        I've had the pleasure of working with some amazing people who have shared their thoughts on my work. Here's what they have to say:
      </p>
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
              <Image className="self-start dark:hidden"
                src="https://www.energycap.com/wp-content/uploads/2023/08/energycap-logo.svg"
                width={"192"}
                height={"192"}
                alt="">
              </Image>
              <Image className="self-start"
                src="https://www.energycap.com/wp-content/uploads/2022/04/energycap-white.svg"
                width={"192"}
                height={"192"}
                alt="">
              </Image>
              <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg/8 text-gray-900 dark:text-gray-300">
                  <p>“Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.”</p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  <Image className="rounded-full bg-gray-50" width={"56"} height={"56"} src="/../../../../public/Zachary_ODonnell.png" alt=""></Image>
                  <div className="text-base">
                    <div className="font-semibold text-gray-900 dark:text-white">Zac O'Donnell</div>
                    <div className="mt-1 text-gray-500 dark:text-gray-400">Director of Technology Enablement</div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="flex flex-col border-t border-gray-900/10 dark:border-white/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
              <Image className="self-start dark:hidden"
                src="https://www.energycap.com/wp-content/uploads/2023/08/energycap-logo.svg"
                width={"192"}
                height={"192"}
                alt="">
              </Image>
              <Image className="self-start"
                src="https://www.energycap.com/wp-content/uploads/2022/04/energycap-white.svg"
                width={"192"}
                height={"192"}
                alt="">
              </Image>            <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg/8 text-gray-900 dark:text-gray-300">
                  <p>“Excepteur veniam labore ullamco eiusmod. Pariatur consequat proident duis dolore nulla veniam reprehenderit nisi officia voluptate incididunt exercitation exercitation elit. Nostrud veniam sint dolor nisi ullamco.”</p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  <Image className="rounded-full bg-gray-50" width={"56"} height={"56"} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></Image>
                  <div className="text-base">
                    <div className="font-semibold text-gray-900 dark:text-white">Zac O'Donnell</div>
                    <div className="mt-1 text-gray-500 dark:text-gray-400">Director of Technology Enablement</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export default TestimonialSection