import { SVGIcon } from '@/lib/types';
import { cn } from '@/lib/utils';

export default function ThreeM({ size = 120, className }: SVGIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size / 3}
      viewBox="0 0 300 157.69046"
      className={cn('text-red-600', className)}
      style={{ color: 'inherit' }}
    >
      <defs>
        <clipPath id="a" clipPathUnits="userSpaceOnUse">
          <path d="M0 0h603v783H0V0Z" />
        </clipPath>
      </defs>
      <g clip-path="url(#a)" transform="matrix(7.56192 0 0 -7.56192 -274.540357 1003.62494)">
        <path
          fill="red"
          d="m67.5289 132.1326-2.83-11.512-2.838 11.512h-8.197v-4.251c-.996 3.72-4.65 4.653-7.915 4.706-3.981.052-8.392-1.673-8.545-6.937h5.506c0 1.589 1.455 2.499 2.829 2.476 1.687.014 2.463-.706 2.502-1.827-.058-.973-.632-1.65-2.488-1.65h-1.852v-3.82h1.681c.955 0 2.284-.52 2.336-1.88.064-1.621-1.063-2.333-2.45-2.347-2.476.092-3.115 1.994-3.115 3.63h-5.715c.024-1.102-.012-8.285 8.945-8.232 4.291-.039 7.414 1.765 8.295 4.252v-3.812h5.512v12.42l3.048-12.42h4.925l3.059 12.406v-12.417h5.624v19.703h-8.317Zm-13.847-11.485c-.702 1.452-1.69 2.087-2.246 2.288 1.167.519 1.778 1.223 2.246 2.626v-4.914z"
        />
      </g>
    </svg>
  );
}
