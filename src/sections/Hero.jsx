export default function Hero() {
  return (
    <section className='pt-12 pb-20 bg-zinc-950'>
      <div className='max-w-7xl mx-auto px-6 lg:px-12'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='text-center lg:text-left'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-zinc-50'>
              <span className='block'>Building digital</span>
              <span className='block'>products, brands</span>
              <span className='block'>
                and{' '}
                <span className='inline-flex items-center gap-3'>
                  <span className='h-2.5 w-2.5 rounded-full bg-purple-500' />
                  <span className='text-purple-400'>experience.</span>
                </span>
              </span>
            </h1>

            <p className='mt-6 text-zinc-300 text-lg max-w-lg leading-relaxed mx-auto lg:mx-0'>
              I am a Frontend Developer specializing in building modern web
              applications using React. I focus on creating clean user
              interfaces, responsive layouts, and engaging user experiences.
            </p>
          </div>

          <div className='relative flex justify-center items-center'>
            <div className='w-[380px] h-[440px] lg:w-[480px] lg:h-[540px]  rounded-[25%] overflow-hidden'>
              <img
                src='/profile.png'
                alt='Profile photo'
                className='h-full w-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
