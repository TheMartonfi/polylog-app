import React, { useState, useEffect } from "react";
import ProgressComponent from "@material-ui/core/CircularProgress";

function JitsiMeet(props) {
	const [loading, setLoading] = useState(false);
	const containerStyle = {
		width: "100%",
		height: "100%"
	};

	const jitsiContainerStyle = {
		display: loading ? "none" : "block",
		width: "100%",
		height: "100%"
	};

	function startConference() {
		try {
			const domain = "meet.jit.si";
			const options = {
				roomName: props.session,
				height: 714,
				parentNode: document.getElementById("jitsi-container"),
				interfaceConfigOverwrite: {
					filmStripOnly: false,
					SHOW_JITSI_WATERMARK: false
				},
				configOverwrite: {
					disableSimulcast: false
				}
			};

			const api = new window.JitsiMeetExternalAPI(domain, options);
			api.addEventListener("videoConferenceJoined", () => {
				console.log("Local User Joined");
				setLoading(false);
				api.executeCommand("displayName", props.name);
			});
		} catch (error) {
			console.error("Failed to load Jitsi API", error);
		}
	}

	useEffect(() => {
		if (window.JitsiMeetExternalAPI) startConference();
		else alert("Jitsi Meet API script not loaded");
	}, []);

	return (
		<div style={containerStyle}>
			{loading && <ProgressComponent />}
			<div id="jitsi-container" style={jitsiContainerStyle} />
		</div>
	);
}

export default JitsiMeet;
