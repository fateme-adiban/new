import React, { useEffect } from "react"
import Page from "./Page"

function Chat() {
  return (
    <>
      <Page title="صفحه چت">
        <div id="chat-wrapper" class="shadow border-top border-left border-right chat-border">
          <div class="chat-title-bar bg-primary chat-border">
            صفحه چت
            <span class="chat-title-bar bg-primary">
              {/* <i class="fas fa-times-circle"></i> */}
              ارسال به : امیرجلالی بیدگلی
            </span>
          </div>
          <div id="chat" class="chat-log">
            <div class="chat-self">
              <div class="chat-message">
                <div class="chat-message-inner">سلام</div>
              </div>
              <img class="chat-avatar avatar-tiny" src="../images/profile.jpg"></img>
            </div>

            <div class="chat-other">
              <a href="#">
                <img class="avatar-tiny" src="../images/profile.jpg"></img>
              </a>
              <div class="chat-message">
                <div class="chat-message-inner">
                  <a href="#">
                    <strong> امیرجلالی بیدگلی : </strong>
                  </a>
                  سلام
                </div>
              </div>
            </div>
          </div>
          <form id="chatForm" class="chat-form border-top">
            <input type="text" class="chat-field" id="chatField" placeholder="پیام خود را وارد کنید..." autocomplete="off" />
          </form>
        </div>
      </Page>
    </>
  )
}

export default Chat
