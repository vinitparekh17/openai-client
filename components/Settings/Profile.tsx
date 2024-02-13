import { Avatar, Grid, Badge } from '@nextui-org/react';

export default function Profile() {

  return (
    <section className="px-6 py-3">
      <h1 className="text-3xl my-6 font-semibold">Profile</h1>
      <div className="flex items-center justify-between">
        <h2 className="text-xl my-2 font-semibold">Personal Information</h2>
        <button className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-600 shadow-sm shadow-black rounded-md dark:bg-gray-800 hover:bg-gray-700 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-700">
          Edit
        </button>
      </div>
      <hr className="my-6 h-px dark:bg-gray-700 bg-gray-200 w-[98%] mx-auto" />
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div className="space-y-2 sm:order-last">
          <div className="w-fit mx-auto">
            <abbr title="Edit profile picture">
              <label htmlFor="avatar" className="mx-auto">
                <Grid.Container gap={1}>
                  <Grid>
                    <Badge
                      disableOutline
                      content="Edit"
                      color="primary"
                      size={'lg'}
                      placement={'bottom-left'}
                      horizontalOffset={15}
                      verticalOffset={15}
                    >
                      <Avatar
                        src="https://i.pravatar.cc/200"
                        className="w-32 h-32"
                        pointer
                        bordered
                        borderWeight={'extrabold'}
                        alt="Avatar"
                        color={'gradient'}
                      />
                    </Badge>
                  </Grid>
                </Grid.Container>
              </label>
              <input type="file" id="avatar" name="avatar" className="hidden" />
            </abbr>
          </div>
        </div>
        <div className="space-y-2">
          <div className='flex'>
          <div className="mb-3 mr-[5%] w-[45%]">
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="username"
            >
              First Name
            </label>
            <input
              className="w-full my-1 px-4 py-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 focus:bg-white focus:ring-0 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
              id="username"
              type="text"
              name="username"
              placeholder="User Name"
            />
          </div>
          <div className="mb-3 ml-[5%] w-[45%]">
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="firstName"
            >
              Last Name
            </label>
            <input
              className="w-full my-1 px-4 py-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 focus:bg-white focus:ring-0 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
              id="lastName"
              type="text"
              name="username"
              placeholder="Last Name"
            />
          </div>
          </div>
          <div className="mb-3 w-full">
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="emailAddress"
            >
              Email Address
            </label>
            <input
              className="w-full my-1 px-4 py-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 focus:bg-white focus:ring-0 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
              id="emailAddress"
              type="email"
              name="emailAddress"
              placeholder="Email Address"
            />
          </div>
          <div className="mt-3 w-full">
          <button className='mt-3 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Save
          </button>
          </div>
        </div>
      </div>
    </section>
  );
}
