const SponsorLink = ({
    imageUrl,
    companyName,
    url,
    level,
    imageAlt = null,
    className = "",
    target = "_blank",
    rel = "noopener noreferrer"
}) => {
    return (
        <a
            href={url}
            target={target}
            rel={rel}
            className={`inline-block transition-transform duration-200 hover:scale-105 hover:shadow-lg ${className}`}
            style={{
            }}
        >
            <div
                className="rounded-lg shadow-md overflow-hidden m-2"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: level === 'Platinum Sponsor' ? '555px' : '444px',
                    maxWidth: '80vw',
                    // width: level === 'Platinum Sponsor' ? '100%' :'444px', 
                    // maxWidth: '80vw', 
                    height: level === 'Platinum Sponsor' ? '265px' : '235px',
                    padding: '2rem',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.4)',
                    border: level === 'Platinum Sponsor' ? '4px solid #a3a3a3' : '3px solid #cd7f32',
                }}
            >

                <div className="bg-gray-100 flex items-center justify-center">
                    <img
                        src={imageUrl}
                        alt={imageAlt || `${companyName} logo`}
                        // className="object-contain"
                        style={{ maxHeight: level === 'Platinum Sponsor' ? '155px' : '125px' }}
                    />
                </div>
                <div>
                    <h3
                        style={{ fontSize: level === 'Platinum Sponsor' ? '1.75rem' : '1.65rem', marginBottom: '0', marginTop: '0.5rem' }}
                    >
                        {companyName}
                    </h3>
                    <div className="font-semibold text-gray-600  text-center"
                        style={{ fontSize: level === 'Platinum Sponsor' ? '1.6rem' : '1.5rem', fontWeight: level === 'Platinum Sponsor' ? 'bold' : 'regular', color: level === 'Platinum Sponsor' ? '#a3a3a3' : '#cd7f32' }}
                    >
                        {level}
                    </div>

                </div>
            </div>
        </a>
    );
};

export default SponsorLink;
