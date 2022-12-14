import React, { useEffect } from 'react';
import './index.scss';
import { createPortal } from 'react-dom';
import { MetamaskConnectButton, WalletConnectButton } from '../ConnectButton';

const WalletModal = ({
  toggleModal,
  loginMetamask,
  loginWalletConnect,
  isOpen = false,
}) => {
  useEffect(() => {
    if (isOpen) document.querySelector('body').style.overflow = 'hidden';
    else document.querySelector('body').style.overflow = '';
  }, [isOpen]);

  const initMetamask = () => {
    loginMetamask();
    toggleModal();
  };

  const initWalletConnect = () => {
    loginWalletConnect();
    toggleModal();
  };

  return (
    isOpen &&
    createPortal(
      <div className='wallet-modal'>
        <div className='wallet-modal__overlay' onClick={toggleModal} />
        <div className='wallet-modal__container'>
          <p className='wallet-modal__text'>
            Please connect a wallet to use AirDAO
          </p>
          <MetamaskConnectButton onClick={initMetamask} />
          <WalletConnectButton onClick={initWalletConnect} />
        </div>
      </div>,
      document.querySelector('body')
    )
  );
};

export default WalletModal;
