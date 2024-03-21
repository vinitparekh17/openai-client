import { Avatar, Grid, Badge, Modal } from '@nextui-org/react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { CurrentAuthState } from '../../slices/authSlice';
import { handleEditProfile } from '../../utils/auth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
export default function Profile() {

  const [isEdit, setIsEdit] = useState<boolean>(true);
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<number>();
  const [profile, setProfile] = useState<number>();

  const handleProfile = () => {
    setVisible(false);
    setProfile(selectedValue);
  }

  const { user } = useSelector(CurrentAuthState) as { user: UserData }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EditFormValues>();

  const dispatch = useDispatch();

  return (
    <section className="px-6 py-3">
      <h1 className="text-3xl my-6 font-semibold">Profile</h1>
      <div className="flex items-center justify-between">
        <h2 className="text-xl my-2 font-semibold">Personal Information</h2>
        <button className="px-4 py-2 text-sm font-medium tracking-wide text-white bg-indigo-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-teal-400 focus:ring-offset-2" onClick={() => setIsEdit(!isEdit)}>
          {!isEdit ? 'View' : 'Edit'}
        </button>
      </div>
      <hr className="my-6 h-px dark:bg-gray-700 bg-gray-200 w-[98%] mx-auto" />

      <form className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2" onSubmit={handleSubmit(data => {
        data.id = user.id
        data.profile = profile ? profile : user.profile
        handleEditProfile(data, dispatch)
      })}>
        <div className="space-y-2 sm:order-last">
          <div className="w-fit mx-auto">
            <abbr title="Edit profile picture">
              <button type='button' disabled={isEdit} onClick={() => setVisible(true)}>
                <Grid.Container gap={1}>
                  <Grid>
                    <Badge
                      disableOutline
                      content="Edit"
                      color="primary"
                      hidden={isEdit}
                      size={'lg'}
                      placement={'bottom-left'}
                      horizontalOffset={15}
                      verticalOffset={15}
                    >
                      <Avatar
                        src={profile ? `/images/users/user-${profile}.webp` : `/images/users/user-${user.profile}.webp`}
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
              </button>
              <Modal
                closeButton
                onClose={() => setVisible(false)}
                open={visible}>
                <Modal.Header>
                  <h2 className='text-3xl font-bold'>Choose your avatar</h2>
                </Modal.Header>

                <Modal.Body>
                  <Grid.Container gap={1} justify='center'>
                    {new Array(6).fill(null).map((_, i) => (
                      <Grid key={i} xs={6} md={4}>
                        <input
                          type="checkbox"
                          className='w-10 h-10'
                          id={`imageCheckbox-user-${i}`}
                          onChange={() => { setSelectedValue(i); console.log(selectedValue) }}
                          value={i}
                          style={{ display: 'none' }}
                        />
                        <label htmlFor={`imageCheckbox-user-${i}`}>
                          <Image src={`/images/users/user-${i}.webp`} className={`border-solid border-4 ${selectedValue == i ? 'border-emerald-400' : ''} rounded-full`} alt='' width={500} height={500} />
                        </label>
                      </Grid>
                    ))}
                  </Grid.Container>
                </Modal.Body>

                <Modal.Footer>
                  <button
                    className='bg-red-500 text-white px-4 py-2 rounded-lg'
                    onClick={() => setVisible(false)}
                  >
                    Close
                  </button>
                  <button className='bg-green-500 text-white px-4 py-2 rounded-lg' onClick={handleProfile}>Apply</button>
                </Modal.Footer>
              </Modal>
            </abbr>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex">
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
                disabled={isEdit}
                type="text"
                {...register("firstName", { required: true })}
                defaultValue={user?.name.split(' ')[0]}
                placeholder="User Name"
              />
              {errors.firstName && (
                <div className="text-red-500 my-2">{errors.firstName.message}</div>
              )}
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
                disabled={isEdit}
                {...register('lastName', { required: true })}
                defaultValue={user?.name.split(' ')[1]}
                placeholder="Last Name"
              />
              {errors.lastName && (
                <div className="text-red-500 my-2">{errors.lastName.message}</div>
              )}
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
              disabled={isEdit}
              {...register('email', { required: true })}
              defaultValue={user.email}
              placeholder="Email Address"
            />
            {errors.email && (
              <div className="text-red-500 my-2">{errors.email.message}</div>
            )}
          </div>
          <div className="mt-3 w-full">
            <button
              className="mt-3 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type='submit'
              disabled={isSubmitting}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
