import Image from 'next/image';
import zacPic from '../../../public/Zachary_ODonnell.png';
import vancePic from '../../../public/Vance_Hensler.png';

const TestimonialSection = () => {
  return (
    <>
      <h3 className="text-3xl py-1 dark:text-white">Positive Feedback</h3>
      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        I've had the pleasure of working with some amazing people who were kind enough to share their thoughts on not only my output, but on what it's like to work with me. Here's what my manager and most senior engineer on the team have to say about my recent work:
      </p>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
              <Image className="self-start dark:hidden"
                src="https://www.energycap.com/wp-content/uploads/2023/08/energycap-logo.svg"
                width={"192"}
                height={"192"}
                alt="">
              </Image>
              <Image className="self-start hidden dark:block"
                src="https://www.energycap.com/wp-content/uploads/2022/04/energycap-white.svg"
                width={"192"}
                height={"192"}
                alt="">
              </Image>
              <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg/8 text-gray-900 dark:text-gray-300">
                  <p className='mb-2'>“Adam exceeded all goals in all periods of 2023. In fact, he exceeded the H2 goal we set - a goal that was intended as a stretch target - by more than 10%. His productivity increased 23% over the first half of the year.”</p>
                  <p>“In addition to the quantitative jump in measured productivity, I've also seen major improvements in autonomy, confidence, and in the ability to find and follow relevant examples. And throughout all of it a positive, fun, and team-minded attitude and communication style.”</p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  <Image className="rounded-full bg-gray-50" width={"56"} height={"56"} src={zacPic} alt=""></Image>
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
              <Image className="self-start hidden dark:block"
                src="https://www.energycap.com/wp-content/uploads/2022/04/energycap-white.svg"
                width={"192"}
                height={"192"}
                alt="">
              </Image>            <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg/8 text-gray-900 dark:text-gray-300">
                  <p className='mb-6'>"I was actually thinking about this a week or so ago about how your code review work has been looking really good finding some tricky issues missed. I forget the review but it was one of mine."</p>
                  <p>"I'm about to complete your Import Profile review, that was quite the beast! It was very well done."</p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  <Image className="rounded-full bg-gray-50" width={"56"} height={"56"} src={vancePic} alt=""></Image>
                  <div className="text-base">
                    <div className="font-semibold text-gray-900 dark:text-white">Vance Hensler</div>
                    <div className="mt-1 text-gray-500 dark:text-gray-400">Staff Software Engineer</div>
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