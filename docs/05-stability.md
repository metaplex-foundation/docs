---
sidebar_label: Stability
---

# Stability Index

Throughout the documentation are indications of a section's stability. Some APIs
and projects are so proven and so relied upon that they are unlikely to ever
change at all.  Others are brand new and experimental, or known to be hazardous.

The stability indices are as follows:

<div class="api_stability api_stability_0">Stability: 0 - Deprecated. The
feature may emit warnings. Backward compatibility is not guaranteed.</div>

<br/>

<div class="api_stability api_stability_1">Stability: 1 - Experimental. The
feature may emit warnings. The feature is not subject to <a
href="https://semver.org/">Semantic Versioning</a> rules. Non-backward
compatible changes or removal may occur in any future release. Use of the
feature is not recommended in production or mainnet environments.</div>

<br/>

<div class="api_stability api_stability_2">Stability: 2 - Stable. Compatibility
with the ecosystem is a high priority.</div>

<br/>

<div class="api_stability api_stability_3">Stability: 3 - Legacy. The feature is
no longer recommended for use. While it likely will not be removed, and is still
covered by semantic-versioning guarantees, use of the feature should be
avoided.</div>

Use caution when making use of Experimental features. Users may not be aware
that experimental features are being used. Bugs or behavior changes may
surprise users when Experimental API modifications occur. To avoid surprises,
use of an Experimental feature may need a command-line flag.