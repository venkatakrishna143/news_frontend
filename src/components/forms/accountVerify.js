import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AccountVerify = () => {
    const { uid, Eemail } = useParams();
    const navigate = useNavigate();

    const [successModalVisible, setSuccessModalVisible] = useState(false);
    const [errorModalVisible, setErrorModalVisible] = useState(false);

    useEffect(() => {
        const sendDataToBackend = async () => {
            try {
                const response = await axios.post('https://api.evartalu.com/users/validateregister', {
                    uid,
                    Eemail,
                });

                if (response.status === 200) {
                    setSuccessModalVisible(true);
                } else {
                    setErrorModalVisible(true);
                }
            } catch (error) {
                setErrorModalVisible(true);
                setTimeout(() => {
                    navigate('/signup');
                }, 3000);
                console.error('Error sending data to backend:', error);
            }
        };

        if (uid && Eemail) {
            sendDataToBackend();
        }
    }, [uid, Eemail, navigate]);

    return (
        <div className='signin_bg min-h-screen'>
            {/* Success Modal */}
            {successModalVisible && (
                <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center z-50">
                    <div className="bg-[#F2AD0D] rounded-[34px] p-8 text-center md:px-[60px] px-[30px] py-[40px]">
                        <div className='flex justify-center mb-[25px]'>
                            <img src={GIF} alt="Loading animation" className='rounded-[50%] w-[105px] h-[105px]' />
                        </div>
                        <h1 className='text-white font-semibold lg:text-[28px] md:text-[20px] '>Account Successfully created </h1>
                        <p className='text-white text-[16px] font-semibold'>Go back to</p>
                        <button className='text-white font-bold text-[16px] bg-black rounded-[5px] py-[8px] px-[16px]' onClick={() => navigate('/Signin')}>Sign In</button>
                    </div>
                </div>
            )}
            {/* Error Modal */}
            {errorModalVisible && (
                <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center z-50">
                    <div className="bg-[#F2AD0D] rounded-[34px] p-8 text-center md:px-[60px] px-[30px] py-[40px]">
                        <div className='flex justify-center mb-[25px]'>
                            <img src={GIF1} alt="Loading animation" className='rounded-[50%] w-[105px] h-[105px]' />
                        </div>
                        <h1 className='text-white font-semibold lg:text-[28px] md:text-[20px] '>Something went wrong </h1>
                        <p className='text-white text-[16px] font-semibold'>Be patient and kindly try after sometime</p>
                        <button className='text-white font-bold text-[16px] bg-black rounded-[5px] py-[8px] px-[16px]' onClick={() => navigate('/Signup')}>Sign Up</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccountVerify;