//animation configs & variants

/*EASING CONFIG*/
const easing = [0.175, 0.85, 0.42, 0.96];

/*EASING ANIMATION DIRECTION*/
export const yAxisVariants = {
  exit: { y: 150, opacity: 0, transition: { duration: 0.4, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};

export const yAxisVariantsSlow = {
  exit: { y: 150, opacity: 0, transition: { duration: 0.4, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: easing
    }
  }
};

export const yAxisVariantsSlower = {
  exit: { y: 150, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: easing
    }
  }
};
export const yAxisVariantsSlowest = {
  exit: { y: 150, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 3.2,
      ease: easing
    }
  }
};

export const xAxisVariants = {
  exit: { x: -250, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};

export const xAxisVariantsSlow = {
  exit: { x: -250, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: easing
    }
  }
};

export const xAxisVariantsSlowFromRight = {
  exit: { x: 250, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: easing
    }
  }
};

export const xAxisVariantsSlower = {
  exit: { x: 150, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: easing
    }
  }
};

//Activate animation when div enters viewport


/*   IN VIEW SKELETON */
/*
            <InView triggerOnce={true}>
              {({ inView, ref }) => (
                  <div ref={ref}>
                    <div>
                      {inView ? ():()}</div></div>)}</InView>
* */
