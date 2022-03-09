initSidebarItems({"constant":[["ICANON","`ICANON`"],["PIPE_BUF","`PIPE_BUF`—The maximum length at which writes to a pipe are atomic."]],"enum":[["Advice","`POSIX_MADV_*` constants for use with `madvise`."],["SeekFrom","Enumeration of possible methods to seek within an I/O object."]],"fn":[["close","`close(raw_fd)`—Closes a `RawFd` directly."],["dup","`dup(fd)`—Creates a new `OwnedFd` instance that shares the same underlying file description as `fd`."],["dup2","`dup2(fd, new)`—Creates a new `OwnedFd` instance that shares the same underlying file description as the existing `OwnedFd` instance, closing `new` and reusing its file descriptor."],["dup2_with","`dup3(fd, new, flags)`—Creates a new `OwnedFd` instance that shares the same underlying file description as the existing `OwnedFd` instance, closing `new` and reusing its file descriptor, with flags."],["eventfd","`eventfd(initval, flags)`—Creates a file descriptor for event notification."],["ioctl_blkpbszget","`ioctl(fd, BLKPBSZGET)`—Returns the physical block size of a block device."],["ioctl_blksszget","`ioctl(fd, BLKSSZGET)`—Returns the logical block size of a block device."],["ioctl_fionbio","`ioctl(fd, FIONBIO, &value)`—Enables or disables non-blocking mode."],["ioctl_fionread","`ioctl(fd, FIONREAD)`—Returns the number of bytes ready to be read."],["ioctl_tcgets","`ioctl(fd, TCGETS)`—Get terminal attributes."],["ioctl_tiocexcl","`ioctl(fd, TIOCEXCL)`—Enables exclusive mode on a terminal."],["ioctl_tiocgwinsz","`ioctl(fd, TIOCGWINSZ)`—Get the current terminal window size."],["ioctl_tiocnxcl","`ioctl(fd, TIOCNXCL)`—Disables exclusive mode on a terminal."],["is_read_write","Returns a pair of booleans indicating whether the file descriptor is readable and/or writable, respectively."],["isatty","`isatty(fd)`—Tests whether a file descriptor refers to a terminal."],["madvise","`posix_madvise(addr, len, advice)`—Declares an expected access pattern for a memory-mapped file."],["mlock","`mlock(ptr, len)`—Lock memory into RAM."],["mlock_with","`mlock2(ptr, len, flags)`—Lock memory into RAM, with flags."],["mmap","`mmap(ptr, len, prot, flags, fd, offset)`—Create a file-backed memory mapping."],["mmap_anonymous","`mmap(ptr, len, prot, MAP_ANONYMOUS | flags, -1, 0)`—Create an anonymous memory mapping."],["mprotect","`mprotect(ptr, len, flags)`"],["mremap","`mremap(old_address, old_size, new_size, flags)`—Resize, modify, and/or move a memory mapping."],["mremap_fixed","`mremap(old_address, old_size, new_size, MREMAP_FIXED | flags)`—Resize, modify, and/or move a memory mapping to a specific address."],["msync","`msync(addr, len, flags)`—Declares an expected access pattern for a memory-mapped file."],["munlock","`munlock(ptr, len)`—Unlock memory."],["munmap","`munmap(ptr, len)`"],["pipe","`pipe()`—Creates a pipe."],["pipe_with","`pipe2(flags)`—Creates a pipe, with flags."],["poll","`poll(self.fds, timeout)`"],["pread","`pread(fd, buf, offset)`—Reads from a file at a given position."],["preadv","`preadv(fd, bufs, offset)`—Reads from a file at a given position into multiple buffers."],["preadv2","`preadv2(fd, bufs, offset, flags)`—Reads data, with several options."],["pwrite","`pwrite(fd, bufs)`—Writes to a file at a given position."],["pwritev","`pwritev(fd, bufs, offset)`—Writes to a file at a given position from multiple buffers."],["pwritev2","`pwritev2(fd, bufs, offset, flags)`—Writes data, with several options."],["read","`read(fd, buf)`—Reads from a stream."],["readv","`readv(fd, bufs)`—Reads from a stream into multiple buffers."],["stderr","`STDERR_FILENO`—Standard error, borrowed."],["stdin","`STDIN_FILENO`—Standard input, borrowed."],["stdout","`STDOUT_FILENO`—Standard output, borrowed."],["take_stderr","`STDERR_FILENO`—Standard error, owned."],["take_stdin","`STDIN_FILENO`—Standard input, owned."],["take_stdout","`STDOUT_FILENO`—Standard output, owned."],["userfaultfd","`userfaultfd(flags)`"],["with_retrying","Call `f` until it either succeeds or fails other than [`Error::INTR`]."],["write","`write(fd, buf)`—Writes to a stream."],["writev","`writev(fd, bufs)`—Writes to a stream from multiple buffers."]],"mod":[["epoll","epoll support."]],"struct":[["DupFlags","`O_*` constants for use with `dup2`."],["Error","The error type for `rustix` APIs."],["EventfdFlags","The `EFD_*` flags accepted by `eventfd`."],["IoSlice","A buffer type used with `Write::write_vectored`."],["IoSliceMut","A buffer type used with `Read::read_vectored`."],["MapFlags","`MAP_*` flags for use with `mmap`."],["MlockFlags","`MLOCK_*` flags for use with `mlock_with`."],["MprotectFlags","`PROT_*` flags for use with `mprotect`."],["MremapFlags","`MREMAP_*` flags for use with `mremap`."],["MsyncFlags","`MS_*` flags for use with `msync`."],["OwnedFd","A wrapper around `io_lifetimes::OwnedFd` which closes the file descriptor using `rustix`’s own `close` rather than libc’s `close`."],["PipeFlags","`O_*` constants for use with `pipe_with`."],["PollFd","`struct pollfd`—File descriptor and flags for use with `poll`."],["PollFlags","`POLL*` flags for use with `poll`."],["ProtFlags","`PROT_*` flags for use with `mmap`."],["ReadWriteFlags","`RWF_*` constants for use with `preadv2` and `pwritev2`."],["UserfaultfdFlags","The `O_*` flags accepted by `userfaultfd`."]],"type":[["Result","A specialized `Result` type for `rustix` APIs."],["Termios","`struct termios` for use with `ioctl_tcgets`."],["Winsize","`struct winsize` for use with `ioctl_tiocgwinsz`."]]});