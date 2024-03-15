

const Banner = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/dPDLWCh/Rectangle-1.png')]  bg-no-repeat bg-cover max-w-6xl mx-auto md:h-[500px] rounded-xl flex items-center mt-3">
      <div className="max-w-[700px]  text-white mx-auto space-y-5">
          <h1 className="text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
          <p>This recipe nutrition calculator will analyze the calorie and nutrition facts for any recipe. Simply enter the ingredients and serving size to get started.</p>
          <div>
              <button className="btn btn-accent btn-active">Explore Now</button>
              <button className="btn ml-3 btn-outline btn-secondary">Our Feedback</button>
          </div>
      </div>
    </div>
  );
};

export default Banner;