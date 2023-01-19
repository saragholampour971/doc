import './clouds.jpg'

const inputClassName='w-[120px] rounded-lg shadow-sm text-[10px] font-normal leading-7 px-2'

const Login=()=>{

  return(<>
    <div className={'flex justify-center items-center '}>
      <div className={'flex flex-col space-y-4 rounded-lg border border-1 p-4  shadow-2xl'} style={{backgroundImage:'clouds.jpg'}}>
        <img src={'./clouds.jpg'} alt={'sdf'}/>
      <input className={inputClassName} placeholder={'نام'}/>
      <input className={inputClassName} placeholder={'نام خانوادگی'}/>
      <input className={inputClassName} placeholder={'ایمیل' } type={'email'}/>
      <input className={inputClassName} placeholder={'ایمیل' } type={'email'}/>
      <input className={inputClassName} placeholder={'پسوورد' } type={'password'}/>
      <input className={inputClassName} placeholder={'تکرار پسوورد' } type={'password'}/>
      </div>
    </div>
    </>
    )
}
export  default  Login
