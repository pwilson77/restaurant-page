const toggleActive = () => {
    const current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
};

export default toggleActive;
