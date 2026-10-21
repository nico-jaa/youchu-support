# Youchu Privacy Policy

Developer: **bearabbit**  
Updated and effective: 2026-10-20  
[bearrabbit1002@outlook.com](mailto:bearrabbit1002@outlook.com)

[Back to help](README.en.md) · [Privacy request](mailto:bearrabbit1002@outlook.com?subject=Youchu+privacy+request)

## At a glance

- Items, locations, photos and expiry dates stay on your device. No account or Youchu cloud sync is currently offered, and the developer cannot remotely read your catalog.
- Photo and Chinese speech recognition run on the device. Photos and audio are not uploaded, and recognition does not silently switch to the network. You review and save the results.
- Camera, microphone, speech, location and notifications are requested when used. Declining or revoking permission still allows manual management of existing and new items.
- Optional address lookup obtains a location once after you continue, then sends coordinates to Apple geocoding. Coordinates are not saved and background tracking is not used. Confirmed address text stays locally.
- Opening support websites creates website access information. Sending email lets the developer and email providers process the message. The app does not automatically send feedback or household records.
- Marking used or discarded keeps the record. Deleting one item does not erase independent moving history or photos still reused elsewhere. Manage clearing all local data, Photos originals, system backups and sent emails separately.

This is a reading overview. Read the full policy below for scope and processing details.

## Permissions and when they are used

### Camera

- **When**: When you choose to take a photo.
- **Purpose**: Photograph an item or packaging for an editable draft.
- **Without permission**: Type the details or choose a library photo.
- **Manage**: Find Youchu in iOS Settings, or turn it off under Privacy & Security → Camera.

### System photo picker

- **When**: When you choose a library photo. Full-library read permission is not requested.
- **Purpose**: Receives only the chosen image for the draft and on-device recognition. iOS may download an iCloud original.
- **Without permission**: Cancel and type instead. The app cannot browse photos you did not choose.
- **Manage**: Cancel the picker. Deleting a Youchu copy does not delete the original in Photos.

### Microphone

- **When**: When you tap Start speaking in Voice entry.
- **Purpose**: An in-memory audio stream is transcribed locally without saving a recording file.
- **Without permission**: Recording is unavailable; type the details or use a photo.
- **Manage**: Find Youchu in iOS Settings, or turn it off under Privacy & Security → Microphone.

### Speech recognition

- **When**: When you tap Start speaking, with an on-device Simplified Chinese capability check.
- **Purpose**: Apple Speech creates editable text. Capture stops if on-device recognition is unsupported.
- **Without permission**: Use manual entry if declined, resources are unavailable or the device is unsupported. No cloud recognition fallback.
- **Manage**: Stop recording, leave the page or revoke access under Privacy & Security → Speech Recognition.

### Notifications

- **When**: When you enable expiry reminders.
- **Purpose**: iOS schedules local notifications. Visible messages show counts without item names or locations.
- **Without permission**: View expiry status and manage items in the app.
- **Manage**: Turn reminders off in Youchu Settings → Expiry reminders, or turn off Youchu notifications in iOS Settings.

### Location When In Use · Optional

- **When**: After you tap Use current location in location editing, read the explanation and continue.
- **Purpose**: Obtain one location and send coordinates to Apple geocoding for an address to review. No background tracking or saved coordinates.
- **Without permission**: Type an address or leave it blank if declined, cancelled, offline or inaccurate. Indoor locations and items still work.
- **Manage**: Revoke access under Settings → Privacy & Security → Location Services → Youchu. Clear a saved address in location editing.

## 1. Scope and who handles your information

This privacy policy is provided by bearabbit, the developer of Youchu (“we”). It explains how the current local-storage version of the Youchu iPhone app and its support website handle information. Updated and effective: October 20, 2026. Privacy contact: bearrabbit1002@outlook.com.

Youchu helps manage household items, storage locations and expiry dates, with manual, photo and Chinese voice entry. Photo and speech recognition run only on the device; you review suggestions. No account registration, account-based cloud storage or multi-device sync is currently offered.

This policy explains processing; it does not replace separate permission for camera, microphone, speech recognition, location or notifications. Manual management works offline. You do not have to allow capture or notifications, visit the website or send feedback.

## 2. Information processed on your device

Items and locations: names, aliases, quantities and units, rooms/cupboards/drawers, optional street addresses, packaging expiry dates, opening dates and confirmed after-opening durations, notes and selected photos, together with stock history, explicit stock-group identifiers, creation/modification times and local identifiers, are used to save, find, display and manage stock, locations and expiry status. A name is required. Other descriptive fields are optional and quantity defaults to one item. Only explicit confirmation writes a draft to the catalog.

Settings and reminders: interface preferences for appearance, moving presentation, operating hand and introduction state, saved filter conditions, the master reminder switch, per-record rules, lead days, time, one later reminder and scheduling records are stored on the device. Searching, sorting and dynamic filtering are local; search analytics are not integrated. Notifications show only the number of records to check, without item names, locations or notes.

System widgets: the app stores a minimal read-only snapshot of active items in a dedicated shared container on the device. This includes local identifiers, necessary names, location relationships and calendar dates for display and navigation. Street addresses, coordinates, photos, notes, recordings and recognition transcripts are not shared. The expiry widget shows counts by default; you can enable details. You choose the favorite location. Names use system privacy masking and lock-screen widgets emphasize counts. iOS controls actual refresh timing.

Items, photos and saved address text are managed locally. Optional address lookup is described below. They are not sent to a developer server or used for advertising, profiling, model training or data trading. We cannot remotely read your local catalog. The app includes no advertising, third-party behavioral analytics, tracking or automatic crash-upload SDK, and does not read advertising identifiers or contacts.

Moving mode stores move names, box and bag numbers, purpose/notes, packing priorities, current container locations, item membership, pre-packing location text, movement history and records needed for undo on this device. To let you continue later, it also automatically saves operation drafts such as container search terms, filters, selected items, quantities, the current container and put-away destination locally. A saved draft does not mean items have been packed or put away; moving stock still requires confirmation. Container locations use existing storage locations and do not request device location. Widgets may show a container number and current storage path, but exclude geographic addresses, pre-packing sources and movement history. Entering moving mode does not start the camera or microphone.

## 3. Photos, voice, addresses and permissions

Camera permission is requested only when you choose to take a photo, to create an editable item draft. Taking photos does not request microphone or location access. If declined, you can type or choose a library photo.

The system photo picker gives the app only images you choose. The app does not scan your whole library or request full-library access for this. If an original is only in iCloud Photos, iOS may download it according to your system settings and Apple's rules.

Photos are resized, thumbnailed and re-encoded on the device. Saved copies do not copy the original GPS/EXIF metadata. Unsaved drafts are not formal catalog records and may be lost after leaving the page. iOS manages temporary files made by the camera and photo picker. Deleting a Youchu copy does not delete the original from Photos. This refers to photo and item-form drafts. Moving selections and put-away operation drafts are saved automatically on the device as described in section 2.

Photo recognition uses Apple Vision on the device to read packaging text and offer limited appearance-based category and date suggestions. Recognized text stays in the current page's memory; it is not uploaded or used for training. A single name suggestion can fill a blank draft without overwriting existing entries. Dates need your review and selection; appearance cannot establish shelf life. Drafts remain editable and enter the item library only when you explicitly save.

Voice entry requests microphone and speech recognition permissions for the selected Apple Speech API only after you tap Start speaking, then checks on-device Simplified Chinese support. An in-memory audio stream is transcribed locally; no recording file is saved and no audio is sent to the developer or a recognition server. If the device or resources do not support this, recording stops without switching to network recognition. You can edit the transcript. Only confirmed fields such as name, location and date enter the saved catalog; the full transcript is not saved automatically.

Recording lasts at most 45 seconds, with up to 5 seconds to finish transcription after stopping. Leaving the page, backgrounding or an audio interruption stops capture without automatic resumption. Received text can be reviewed while the page remains. Cancelling, leaving or ending the app may lose unsaved drafts.

Street addresses are optional. Only after you tap Use current location in location editing and continue after the explanation do we request When In Use permission, obtain a single location and send coordinates to Apple geocoding to look up an address, which may need internet access. Items, photos, storage names and notes are not sent to that service or the developer. Review the address and choose to fill it in; only saving the location stores the address text locally. Coordinates are not stored, there is no background tracking, rooms/cupboards/drawers are not identified, and addresses are not shared with widgets. Approximate location may produce a nearby address; check and complete it manually. If declined, cancelled, offline or unsuccessful, type an address or leave it blank.

You can revoke camera, microphone, speech and location permissions in iOS Settings → Youchu or Settings → Privacy & Security. Revocation prevents corresponding future capture but does not affect manual management or automatically delete saved photos or items. Remove photos in item editing and clear addresses in location editing.

[Apple Location Services & Privacy](https://www.apple.com/legal/privacy/data/en/location-services/)

## 4. Expiry notifications

Notification permission is requested only when you enable expiry reminders. The app gives iOS local notification services the reminder time, identifiers needed to associate local records and a generic message for scheduling, updating and opening the relevant expiry list. No remote push server is used.

Visible notifications show the number of items to check, without names, storage locations, photos or notes. Turn reminders off in Youchu Settings → Expiry reminders or revoke permission in iOS notification settings. Turning reminders off, changing expiry dates, marking items used/discarded, deleting items or clearing data updates or cancels the corresponding notifications. Failures prompt a retry. Declining or revoking notification permission does not affect manual management.

Notification actions View items and Reminder settings require unlocking and opening the app. They do not delete or change items from the lock screen. App icon shortcuts and widgets only open existing pages; opening photo or voice entry does not start capture automatically.

## 5. Support websites and network information

Only when you tap a support or online-privacy link does the app check the corresponding GitHub Pages page. GitHub is preferred, with GitCode used on failure or after about 4 seconds without a response. Requests do not include item contents, credentials, advertising identifiers, app-generated device identifiers or cookies. Network services necessarily receive the IP address, page path, request time and necessary protocol/client information. GitHub states that it logs Pages visitors' IP addresses for security, including signed-out visitors.

The app does not check websites in the background at launch. Cancelling, leaving the page or backgrounding cancels the check. You can open GitCode directly or use the offline policy and help. A successful check does not guarantee that the browser can subsequently reach the page.

GitHub Pages (GitHub, Inc.) hosts static support and privacy pages. GitCode, whose policy identifies Chongqing Open Source Co-Creation Technology Co., Ltd. as its operator, hosts backup documents. Our static HTML includes no analytics scripts, advertisements, upload forms or tracking cookies. GitCode's platform shell and external browsers may use their own cookies, logs or sign-in state. See their policies below for purposes, retention and rights. Reading support does not require a Youchu account or submission of household items.

Help search on the support website matches public help text only in the current browser. Search terms are not uploaded and search history is not saved. Searching does not submit a support request; review and send an email yourself if you want to contact us.

[GitHub General Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement)

[GitHub Pages visitor data](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection)

[GitCode Privacy Policy](https://docs.gitcode.com/docs/help/home/protocol/privacy-policy/)

## 6. Support and feedback you choose to send

The in-app feedback description and preview stay on the current page. Only tapping Copy writes the topic, your text, app version, build, iOS version and local storage mode to the device clipboard, restricted to this device and set to expire in about 10 minutes. Items, photos, recordings, transcripts and device identifiers are not attached automatically; email is not sent automatically.

Only after you confirm sending in your mail app do we receive your email address, display name if supplied, message, attachments you choose and information needed for email delivery. These are used only to reply, investigate your issue, handle privacy requests and address necessary service security matters, not for marketing or model training. Include only what is needed and remove unnecessary private information before sending.

The support mailbox uses Microsoft Outlook.com. Microsoft and your chosen sender's provider process email for delivery, storage and security. Feedback is voluntary and has no effect on local management. Received communications are kept only as long as needed to resolve the request and necessary follow-up, then deleted or anonymized. Information legally required to be kept is limited to that purpose. Provider backup/recovery copies expire under their rules; immediate erasure of every copy is not promised.

[Microsoft Privacy Statement (including Outlook)](https://www.microsoft.com/zh-cn/privacy/privacystatement)

## 7. Sharing and third-party services

We do not sell, rent or share personal information for cross-app advertising tracking, or give household items or photos to advertisers, analytics or recognition services. There is currently no cloud recognition or account-sync recipient.

External processing is limited to the optional Apple address lookup, website visits, support emails you send and system services you choose, as described here. Hosting, email and system providers handle service information under their applicable terms. Their independent processing does not imply that we have signed a dedicated processing agreement with each of them. For processing we arrange, we remain responsible for protection and must verify third-party purposes, scope, safeguards and necessary arrangements for compliance with this policy, applicable law and App Store requirements for equal or greater protection. Links to external policies do not replace those responsibilities.

Unless you separately choose otherwise or applicable law requires it, we do not give received support information to unrelated parties. Required disclosures are limited to necessary information within the request's scope, with notice where legally permitted.

External browsers, email, Apple device backups, iCloud Photos and system keyboards/dictation are operated by their providers according to your choices. Read their service rules too. System services are not Youchu account sync.

## 8. Storage, retention and deletion

Items, photos, locations, processing status and app settings are stored on your device. Marking Used up / Eaten or Discarded moves an item into Processed while retaining its record, photos, processing time and historical location text for undo or restore. It is removed from active lists and expiry scheduling. Marking an outcome is not permanent deletion.

Deleting one item: confirming Delete item in its details removes that item record and its stock history. Photos still reused by other items remain. Moving history is a separate local record and may retain the item name, quantity, unit, time, container and location text recorded at the time. Deleting an item or storage location does not also erase that history. Switching tabs, finishing and archiving a move, or removing an empty container does not delete moving data. There is currently no control to erase all history for just one move; use Clear local data below to erase this history.

Clearing everything: confirm Settings → Local data → Clear local data to remove all active and processed items, app photo copies, locations and addresses, stock history, saved filters, all moves and containers, moving history and operation drafts, and reset reminders. Deletion and clearing cannot be undone. A successful change updates the local widget snapshot; a failed update attempts to remove the old copy and offers a retry. Widgets already displayed or cached by iOS may wait for a system refresh. Independent preferences such as appearance and previously granted system permissions are not automatically reset.

After deleting an item or removing a photo, app photo copies no longer referenced by any item are cleaned up, with a retry available if cleanup fails. Photo reuse does not mean the developer has a remote copy. Clearing does not delete support emails, original Photos images, browser data or historical backups; manage these in the relevant service. Delete App and Offload App, which retains documents and data, have different effects; follow the iOS confirmation.

App data may enter device backups according to your settings, stored with Apple or on a computer you choose. Deleting local records does not automatically erase existing backups. Restoring a backup may restore historical records. Manage retention and deletion in the relevant system service.

When you visit a website or send support email, the providers above may process related information outside your country or region. Your household catalog is not uploaded as a result. See provider policies for logs, email storage, cross-border processing and retention. Before adding features that transmit household records, we will explain recipients, purposes and scope and obtain required permission.

[Apple Privacy Policy](https://www.apple.com/legal/privacy/szh/)

## 9. Security

The app uses the iOS sandbox, local file data protection and system permissions, and strips original metadata from saved photo copies. Website checks use HTTPS and short-lived sessions without storing login credentials. Household records, photos, recordings and recognition transcripts are not written to ordinary app logs.

Local storage does not mean the app adds end-to-end encryption. Device unlock state, backups and content you choose to share also affect protection. Use a device passcode and protect your system accounts. No storage or network transmission can guarantee absolute security. If a security incident affects personal information we process, we will take necessary remedial action and notify affected people and authorities as required.

## 10. Your rights and withdrawing permission

You can view, correct and delete local records in the app and revoke camera, microphone, speech, location and notification permissions in system settings. Revoking permission affects subsequent processing for that feature, not earlier lawful processing. Use the deletion controls above to remove existing data.

For support communications we receive, email bearrabbit1002@outlook.com to ask about processing, access or obtain a copy, correct or delete information, withdraw consent-based processing, or request restriction, object or exercise other rights where applicable. Use the subject “Youchu privacy request” and, where possible, the email address originally used. We ask only for information necessary to verify the request, not the household catalog or unnecessary identity documents.

We will verify and respond promptly within applicable legal deadlines. If a request cannot be met or information must be kept by law, we will explain the reason and available channels. You may also complain to the competent data-protection authority.

We have no remote copy of the local catalog and cannot restore, edit or delete it remotely. Bulk in-app export is not currently available. View and manage records on the device, or contact support about available options. No Youchu account exists, so clearing local data does not require account deletion.

## 11. Children and young people

Youchu is a general household inventory tool, not a service designed to collect children's personal information. It does not ask for age or actively collect children's identity details. Minors should use it with a guardian's guidance, taking particular care not to expose their own or others' private information in notes, photos or feedback.

Guardians who believe a minor sent personal information to support without required permission can contact bearrabbit1002@outlook.com. After verification, we will delete it or take other protective steps as required. Guardians can manage information kept solely on the device locally.

## 12. Policy updates and contact

We show the update and effective dates here and in the in-app policy. Material changes to data types, purposes, recipients or processing will be explained prominently before the relevant feature is enabled, with renewed permission where needed. We will not silently switch local records to uploading through revised text or default options.

Questions about this policy, personal information or rights requests can be sent to developer bearabbit at bearrabbit1002@outlook.com. Read this policy offline in Settings → Privacy policy, or open the public website from Help.

