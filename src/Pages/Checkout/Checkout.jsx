import { toast } from "react-toastify";

const Checkout = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    toast("Thanks. Your paymen succsfully completed.");
  };
  return (
    <>
      <div class="bg-cream text-charcoal min-h-screen font-sans leading-normal overflow-x-hidden lg:overflow-auto">
        <div class="flex-1 md:p-0 lg:pt-8 lg:px-8 md:ml-24 flex flex-col">
          <section class="bg-cream-lighter p-4 shadow">
            <div class="md:flex">
              <h2 class="md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6">
                Your Payment Information
              </h2>
            </div>
            <form onSubmit={handleFormSubmit}>
              <div class="md:flex mb-8">
                <div class="md:w-1/3">
                  <legend class="uppercase tracking-wide text-sm">
                    Location
                  </legend>
                  <p class="text-xs font-light text-red">
                    This entire section is required.
                  </p>
                </div>
                <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
                  <div class="mb-4">
                    <label class="block uppercase tracking-wide text-xs font-bold">
                      Name
                    </label>
                    <input
                      class="w-full shadow-inner p-4 border-0"
                      type="text"
                      required
                      name="name"
                      placeholder="Acme Mfg. Co."
                    />
                  </div>
                  <div class="md:flex mb-4">
                    <div class="md:flex-1 md:pr-3">
                      <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Street Address
                      </label>
                      <input
                        class="w-full shadow-inner p-4 border-0"
                        type="text"
                        required
                        name="address_street"
                        placeholder="555 Roadrunner Lane"
                      />
                    </div>
                    <div class="md:flex-1 md:pl-3">
                      <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Building/Suite No.
                      </label>
                      <input
                        class="w-full shadow-inner p-4 border-0"
                        type="text"
                        required
                        name="address_number"
                        placeholder="#3"
                      />
                      <span class="text-xs mb-4 font-thin">
                        I lied, this isn't required.😎
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="md:flex mb-8">
                <div class="md:w-1/3">
                  <legend class="uppercase tracking-wide text-sm">
                    Contact
                  </legend>
                </div>
                <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
                  <div class="mb-4">
                    <label class="block uppercase tracking-wide text-xs font-bold">
                      Phone
                    </label>
                    <input
                      class="w-full shadow-inner p-4 border-0"
                      type="tel"
                      name="phone"
                      placeholder="(880) 17111-11111"
                    />
                  </div>

                  <div class="mb-4">
                    <label class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                      Email
                    </label>
                    <input
                      class="w-full shadow-inner p-4 border-0"
                      type="email"
                      name="email"
                      placeholder="contact@onclick.com"
                    />
                  </div>
                </div>
              </div>
              <div class="md:flex mb-6">
                <div class="md:w-1/3">
                  <legend class="uppercase tracking-wide text-sm">
                    Booking note
                  </legend>
                </div>
                <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
                  <textarea
                    class="w-full shadow-inner p-4 border-0"
                    placeholder="write your booking note here."
                    rows="6"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-5 py-2  text-2xl mr-10 border-2 border-yellow-500 text-yellow-400"
                >
                  Proced to Payment
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default Checkout;
