Plan
====

## Todo
 * Looks like those actions should be done via another package
   * Add describing system (task id and task description)
   * Add debugging system
   * Activation for describing/logging system should be activated through callbacks

## Done
 * For vinyl objects add wrapping for using in serial and parallel
 * Add serial and parallel, using Promise.all() (for parallel) and some looping for series
 * Test vinyl src() result for isPiped() -> true
 * Context properties:
   * incDepth ctx -> ctx
   * beforeCall fn, ctx
   * afterCall fn, ctx
