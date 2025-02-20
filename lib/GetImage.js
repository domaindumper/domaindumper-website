import Image from "next/legacy/image";

export default function GetImage({src,width,height,layout,alt}) {
    return (
        <>
            <Image width={width} height={height} src={src} alt={alt} layout={layout}/>
        </>
    );
}