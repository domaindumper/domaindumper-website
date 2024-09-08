import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/legacy/image';

export default function CoverImage({ title, src, slug, height, width }) {
  const image = (
    <Image priority
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('rounded-4', {
        'rounded': slug,
      })}
      layout="responsive"
      width={width}
      height={height}
    />
  );
  return (
    <div>
      {slug ? (
        <Link aria-label={title} href={`/posts/${slug}`}>
         {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
